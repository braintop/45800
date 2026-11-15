// Tasks API - Express + Neon (PostgreSQL)
// Routes: GET/POST /api/tasks, GET/PATCH/DELETE /api/tasks/:id, GET /health
const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3000;
if (!process.env.DATABASE_URL) {
  console.error("Missing DATABASE_URL. Copy .env.example to .env and paste the Neon connection string.");
  process.exit(1);
}

// sslmode=require in the Neon connection string turns on SSL
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const COLUMNS = `id AS "_id", title, done, created_at AS "createdAt"`;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const app = express();
app.use(express.json());

// allow the browser (and anyone else in class) to call the API
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE,OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true, db: "connected" });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// all tasks, newest last
app.get("/api/tasks", async (req, res, next) => {
  try {
    const { rows } = await pool.query(`SELECT ${COLUMNS} FROM tasks ORDER BY created_at`);
    res.json(rows);
  } catch (err) { next(err); }
});

// one task
app.get("/api/tasks/:id", async (req, res, next) => {
  try {
    if (!UUID.test(req.params.id)) return res.status(404).json({ error: "task not found" });
    const { rows } = await pool.query(`SELECT ${COLUMNS} FROM tasks WHERE id = $1`, [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: "task not found" });
    res.json(rows[0]);
  } catch (err) { next(err); }
});

// create: { "title": "..." }
app.post("/api/tasks", async (req, res, next) => {
  try {
    const title = typeof req.body?.title === "string" ? req.body.title.trim() : "";
    if (!title) return res.status(400).json({ error: "title missing" });
    const { rows } = await pool.query(`INSERT INTO tasks (title) VALUES ($1) RETURNING ${COLUMNS}`, [title]);
    res.status(201).json(rows[0]);
  } catch (err) { next(err); }
});

// update: { "title"?: "...", "done"?: true }
async function updateTask(req, res, next) {
  try {
    if (!UUID.test(req.params.id)) return res.status(404).json({ error: "task not found" });
    const { title, done } = req.body || {};
    if (title === undefined && done === undefined) return res.status(400).json({ error: "send title and/or done" });
    if (title !== undefined && (typeof title !== "string" || !title.trim())) return res.status(400).json({ error: "title must be a non-empty string" });
    if (done !== undefined && typeof done !== "boolean") return res.status(400).json({ error: "done must be true or false" });
    const { rows } = await pool.query(
      `UPDATE tasks SET title = COALESCE($2, title), done = COALESCE($3, done) WHERE id = $1 RETURNING ${COLUMNS}`,
      [req.params.id, title === undefined ? null : title.trim(), done === undefined ? null : done]
    );
    if (!rows.length) return res.status(404).json({ error: "task not found" });
    res.json(rows[0]);
  } catch (err) { next(err); }
}
app.patch("/api/tasks/:id", updateTask);
app.put("/api/tasks/:id", updateTask);

// delete
app.delete("/api/tasks/:id", async (req, res, next) => {
  try {
    if (!UUID.test(req.params.id)) return res.status(404).json({ error: "task not found" });
    const { rows } = await pool.query(`DELETE FROM tasks WHERE id = $1 RETURNING ${COLUMNS}`, [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: "task not found" });
    res.json({ deleted: rows[0] });
  } catch (err) { next(err); }
});

app.use((req, res) => res.status(404).json({ error: `no route for ${req.method} ${req.path}` }));
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") return res.status(400).json({ error: "invalid JSON body" });
  console.error(err);
  res.status(500).json({ error: "server error", detail: err.message });
});

// create the table on first run, so the server works even before db/schema.sql is run in Neon
async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title      text NOT NULL,
      done       boolean NOT NULL DEFAULT false,
      created_at timestamptz NOT NULL DEFAULT now()
    )`);
}

init()
  .then(() => app.listen(PORT, () => console.log(`Tasks API listening on port ${PORT}`)))
  .catch((err) => {
    console.error("Could not connect to the database:", err.message);
    process.exit(1);
  });
