"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({
            error: 'Token is missing'
        });
    }
    const token = authorization.split(' ')[1]; // Bearer <token>
    if (!token) {
        return res.status(401).json({
            error: 'Token is missing'
        });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not set');
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = decoded; // { user_id: 1, email: 'test@test.com', role: 'admin' }
        next();
    }
    catch (error) {
        return res.status(401).json({
            error: 'Invalid token'
        });
    }
}
