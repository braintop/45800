"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const movieRouters_1 = __importDefault(require("./routes/movieRouters"));
const app = (0, express_1.default)();
function f1(req, res, next) {
    console.log('f1 is called');
    next();
}
function f2(req, res, next) {
    console.log('f2 is called');
    next();
}
function isLoggedIn(req, res, next) {
    console.log('isLoggedIn is called');
    next();
}
function isAdmin(req, res, next) {
    console.log('isAdmin is called');
    req.x = "1234567890";
    next();
}
app.use(express_1.default.json()); //middleware to parse the request body
app.use('/products', f1, f2, isLoggedIn, isAdmin, productRoutes_1.default); //middleware to parse the request body
app.use('/movies', f2, isLoggedIn, isAdmin, movieRouters_1.default); //middleware to parse the request body
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
