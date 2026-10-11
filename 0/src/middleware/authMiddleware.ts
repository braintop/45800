import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import AuthRequest from '../types/AuthRequest';

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {

    const autherization = req.headers.authorization;
    console.log("autherization", autherization);
    if (!autherization) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    let token = autherization.split(' ')[1];
    console.log("token", token);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized token' });
    }

    let secret = process.env.JWT_SECRET as string;
    console.log("secret", secret);
    if(!secret) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    try {

        const decoded = jwt.verify(token, secret) 
        console.log("decoded", decoded);

        req.user = decoded as { id: string; role: string }
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized catch' });
    }
}