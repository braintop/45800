import { Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';

let databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}
const sql = neon(databaseUrl);

export const getProducts = async (_req: Request, res: Response) => {
    const products = await sql`SELECT * FROM products`;
    return res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await sql`SELECT * FROM products WHERE id = ${id}`;
    return res.json(product);
};

export const createProduct = async (req: Request, res: Response) => {
    const { product_name, product_price } = req.body;
    const product = await sql`INSERT INTO products (product_name, product_price) VALUES (${product_name}, ${product_price})`;
    return res.json("product created successfully");
};

export const updateProduct = async (req: Request, res: Response) => {
    const {id} = req.params;//{id:1}
 //   const id = req.params.id;//{id:1}

    const { product_name, product_price } = req.body;
    console.log(req.body);
    console.log(product_name, product_price);
    console.log(id);
    const product = await sql`UPDATE products SET product_name = ${product_name}, product_price = ${product_price} WHERE product_id = ${id}`;
    return res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await sql`DELETE FROM products WHERE id = ${id}`;
    return res.json(product);
};