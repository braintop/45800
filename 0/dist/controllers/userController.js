"use strict";
//npm install bcryptjs
//import bcrypt from "bcryptjs";
// hash the password before storing it in the database -     const hashedPassword = await bcrypt.hash(password, 10);
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.updateUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
// npm install jsonwebtoken
//npm install -D @types/jsonwebtoken
//JWT_SECRET=YOUR_LONG_RANDOM_SECRET
const UserModel_1 = __importDefault(require("../models/UserModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUser = async (req, res) => {
    const { firstName, email, password, role } = req.body;
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const user = await UserModel_1.default.create({ firstName, email, password: hashedPassword });
    res.status(201).json(user);
};
exports.createUser = createUser;
const getUsers = async (req, res) => {
    const users = await UserModel_1.default.find();
    res.status(200).json(users);
};
exports.getUsers = getUsers;
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel_1.default.findById(id);
    res.status(200).json(user);
};
exports.getUserById = getUserById;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserModel_1.default.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
};
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, email, password } = req.body;
    const user = await UserModel_1.default.findByIdAndUpdate(id, { firstName, email, password }, { new: true });
    res.status(200).json(user);
};
exports.updateUser = updateUser;
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = await UserModel_1.default.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    let secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    const token = jsonwebtoken_1.default.sign({ userId: user._id }, secret, { expiresIn: '1h' });
    res.status(200).json({ token, message: 'Login successful', user });
};
exports.login = login;
