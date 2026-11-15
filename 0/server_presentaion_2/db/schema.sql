-- Run once in Neon: Console -> SQL Editor -> paste -> Run
-- (Optional: the API also creates this table on startup if it is missing.)

CREATE TABLE IF NOT EXISTS tasks (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title      text NOT NULL,
  done       boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
