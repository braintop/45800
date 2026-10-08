//npm install bcryptjs
//import bcrypt from "bcryptjs";
// hash the password before storing it in the database -     const hashedPassword = await bcrypt.hash(password, 10);


import User from '../models/UserModel';
import { Request, Response } from 'express';
import bcrypt from "bcryptjs";

export const createUser = async (req: Request, res: Response) => {
    const { firstName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, email, password: hashedPassword });
    res.status(201).json(user);
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(200).json(users);
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { firstName, email, password } = req.body;
    const user = await User.findByIdAndUpdate(id, { firstName, email, password }, { new: true });
    res.status(200).json(user);
}