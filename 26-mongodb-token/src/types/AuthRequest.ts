import { Request } from 'express';

interface AuthRequest extends Request {
    user?: {
        id?: string;
        role?: string;
    };
}

export default AuthRequest;