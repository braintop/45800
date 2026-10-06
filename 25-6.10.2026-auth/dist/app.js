"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDB = connectToMongoDB;
exports.disconnectFromMongoDB = disconnectFromMongoDB;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectToMongoDB() {
    try {
        await mongoose_1.default.connect("mongodb+srv://david:Aa123456@cluster0.tvzv31d.mongodb.net/?appName=Cluster0");
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
