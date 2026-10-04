"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const serverless_1 = require("@neondatabase/serverless");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sql = (0, serverless_1.neon)(process.env.DATABASE_URL);
const registerUser = async (req, res) => {
    try {
        const { user_name, email, password } = req.body;
        if (!user_name || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const existingUsers = await sql `
        SELECT *
        FROM users
        WHERE email = ${email}
      `;
        if (existingUsers.length > 0) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = { user_id: 0, user_name: user_name, email: email.toLowerCase(), password: hashedPassword, role: 'user' };
        const result = await sql.query('INSERT INTO users (user_name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *', [user.user_name, user.email, user.password, user.role]);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const existingUsers = await sql `
        SELECT *
        FROM users
        WHERE email = ${email}
      `;
        if (existingUsers.length === 0) {
            return res.status(400).json({ error: 'User not found' });
        }
        const user = existingUsers[0];
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid password' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in user' });
    }
};
exports.loginUser = loginUser;
