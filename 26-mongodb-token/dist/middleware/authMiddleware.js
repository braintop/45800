"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
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
    let secret = process.env.JWT_SECRET;
    console.log("secret", secret);
    if (!secret) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        console.log("decoded", decoded);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized catch' });
    }
};
exports.authMiddleware = authMiddleware;
