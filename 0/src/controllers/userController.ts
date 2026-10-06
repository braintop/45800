import User from '../models/UserModel';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
    const { firstName, email, password } = req.body;
    const user = await User.create({ firstName, email, password });
    res.status(201).json(user);
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(200).json(users);
}