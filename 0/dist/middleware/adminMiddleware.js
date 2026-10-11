"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = adminMiddleware;
function adminMiddleware(req, res, next) {
    // Check if user is authenticated
    if (!req.user) {
        res.status(401).json({
            message: 'User is not authenticated'
        });
        return;
    }
    console.log("req.user", req.user);
    console.log("req.user.role", req.user.role);
    // Check if user is admin
    if (req.user.role !== 'admin') {
        res.status(403).json({
            message: 'Access denied. Admin only'
        });
        return;
    }
    // User is admin
    next();
}
