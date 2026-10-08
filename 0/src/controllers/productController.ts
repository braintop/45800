import Product from '../models/ProductModel';
import { Request, Response } from 'express';

export const createProduct = async (req: Request, res: Response) => {
    const { title, description, price } = req.body;
    const product = await Product.create({ title, description, price });
    res.status(201).json(product);
}

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find();
    res.status(200).json(products);
}

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const product = await Product.findByIdAndUpdate(id, { title, description, price }, { new: true });
    res.status(200).json(product);
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
}