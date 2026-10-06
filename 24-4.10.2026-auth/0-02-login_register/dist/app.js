"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const movieRouters_1 = __importDefault(require("./routes/movieRouters"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware to parse the request body
app.use('/products', productRoutes_1.default); //middleware to parse the request body
app.use('/movies', movieRouters_1.default); //middleware to parse the request body
app.use('/users', userRoutes_1.default); //middleware to parse the request body
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
