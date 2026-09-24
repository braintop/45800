"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const serverless_1 = require("@neondatabase/serverless");
let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = (0, serverless_1.neon)(databaseUrl);
const getProducts = async (_req, res) => {
    const products = await sql `SELECT * FROM products`;
    return res.json(products);
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await sql `SELECT * FROM products WHERE id = ${id}`;
    return res.json(product);
};
exports.getProductById = getProductById;
const createProduct = async (req, res) => {
    const { product_name, product_price } = req.body;
    const product = await sql `INSERT INTO products (product_name, product_price) VALUES (${product_name}, ${product_price})`;
    return res.json("product created successfully");
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { product_name, product_price } = req.body;
    console.log(req.body);
    console.log(product_name, product_price);
    console.log(id);
    const product = await sql `UPDATE products SET product_name = ${product_name}, product_price = ${product_price} WHERE product_id = ${id}`;
    return res.json(product);
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await sql `DELETE FROM products WHERE id = ${id}`;
    return res.json(product);
};
exports.deleteProduct = deleteProduct;
