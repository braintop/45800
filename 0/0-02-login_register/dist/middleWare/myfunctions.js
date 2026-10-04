"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.g1 = g1;
exports.g2 = g2;
function g1(req, res, next) {
    let x = req.x;
    if (x !== "1234567890") {
        return res.json({ "message": "You are not admin" });
    }
    console.log('g1 is called');
    next();
}
function g2(req, res, next) {
    console.log('g2 is called');
    next();
}
