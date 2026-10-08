"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUser = async (req, res) => {
    const { firstName, email, password } = req.body;
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
