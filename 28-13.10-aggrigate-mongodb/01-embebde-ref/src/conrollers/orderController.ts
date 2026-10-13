import { Request, Response } from 'express';
import OrderModel from '../models/OrderModel';

export async function createOrder(req: Request, res: Response): Promise<void> {
    try {
        const order = await OrderModel.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order' });
    }
}

export async function getOrders(req: Request, res: Response): Promise<void> {
    try {
        const orders = await OrderModel.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error getting orders' });
    }
}

export const getTotalRevenue = async (req: Request, res: Response) => {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      }
    ]);
    res.json(result[0]);
  };
  
  export const getRevenueByProduct = async (req: Request, res: Response) => {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: "$product",
          revenue: { $sum: { $multiply: ["$price", "$quantity"] } },
          ordersCount: { $sum: 1 }
        }
      }
    ]);
    res.json(result);
  };

  export const getHighValueOrders = async (req: Request, res: Response) => {
    const result = await OrderModel.aggregate([
      {
        $match: { price: { $gte: 150 } }
      }
    ]);
    res.json(result);
  };


  export const getTopProducts = async (req: Request, res: Response) => {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: "$product",
          revenue: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      },
      {
        $sort: { revenue: -1 }
      }
    ]);
    res.json(result);
  };

  export const getAverageOrderValue = async (req: Request, res: Response) => {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          averageOrderValue: { $avg: "$price" }
        }
      }
    ]);
    res.json(result[0]);
  };
  
  
