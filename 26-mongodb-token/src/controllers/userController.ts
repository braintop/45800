//npm install bcryptjs
//import bcrypt from "bcryptjs";
// hash the password before storing it in the database -     const hashedPassword = await bcrypt.hash(password, 10);

// npm install jsonwebtoken
//npm install -D @types/jsonwebtoken
//JWT_SECRET=YOUR_LONG_RANDOM_SECRET



import User from '../models/UserModel';
import { Request, Response } from 'express';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
export const createUser = async (req: Request, res: Response) => {
    const { firstName, email, password, role } = req.body;


    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, email, password: hashedPassword,role });
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


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = await User.findOne({ email });
    if(!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    let secret = process.env.JWT_SECRET as string;
    if(!secret) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, secret, { expiresIn: '1h' });
    res.status(200).json({ token, message: 'Login successful', user });
}