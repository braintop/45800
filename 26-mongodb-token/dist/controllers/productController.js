"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getProducts = exports.createProduct = void 0;
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
const createProduct = async (req, res) => {
    const { title, description, price } = req.body;
    const product = await ProductModel_1.default.create({ title, description, price });
    res.status(201).json(product);
};
exports.createProduct = createProduct;
const getProducts = async (req, res) => {
    const products = await ProductModel_1.default.find();
    res.status(200).json(products);
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel_1.default.findById(id);
    res.status(200).json(product);
};
exports.getProductById = getProductById;
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const product = await ProductModel_1.default.findByIdAndUpdate(id, { title, description, price }, { new: true });
    res.status(200).json(product);
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await ProductModel_1.default.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
};
exports.deleteProduct = deleteProduct;
