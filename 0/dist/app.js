"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDB = connectToMongoDB;
exports.disconnectFromMongoDB = disconnectFromMongoDB;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 4000;
async function connectToMongoDB() {
    const mongoURI = process.env.MONGODB_URI;
    try {
        if (!mongoURI) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }
        await mongoose_1.default.connect(mongoURI);
        console.log("You successfully connected to MongoDB!");
        return mongoose_1.default;
    }
    catch (err) {
        console.dir(err);
    }
}
// Call this only when your application terminates
async function disconnectFromMongoDB() {
    await mongoose_1.default.connection.close();
}
connectToMongoDB();
app.use('/users', userRoute_1.default);
app.use('/products', productRoute_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
