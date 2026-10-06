"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const createUser = async (req, res) => {
    const { firstName, email, password } = req.body;
    const user = await UserModel_1.default.create({ firstName, email, password });
    res.status(201).json(user);
};
exports.createUser = createUser;
const getUsers = async (req, res) => {
    const users = await UserModel_1.default.find();
    res.status(200).json(users);
};
exports.getUsers = getUsers;
