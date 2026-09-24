"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cityRoute_1 = __importDefault(require("./routes/cityRoute"));
const courseRoute_1 = __importDefault(require("./routes/courseRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/cities', cityRoute_1.default);
app.use('/courses', courseRoute_1.default);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
