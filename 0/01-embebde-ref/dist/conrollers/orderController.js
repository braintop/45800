"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopProducts = exports.getHighValueOrders = exports.getRevenueByProduct = exports.getTotalRevenue = void 0;
exports.createOrder = createOrder;
exports.getOrders = getOrders;
const OrderModel_1 = __importDefault(require("../models/OrderModel"));
async function createOrder(req, res) {
    try {
        const order = await OrderModel_1.default.create(req.body);
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating order' });
    }
}
async function getOrders(req, res) {
    try {
        const orders = await OrderModel_1.default.find();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting orders' });
    }
}
const getTotalRevenue = async (req, res) => {
    const result = await OrderModel_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
            }
        }
    ]);
    res.json(result[0]);
};
exports.getTotalRevenue = getTotalRevenue;
const getRevenueByProduct = async (req, res) => {
    const result = await OrderModel_1.default.aggregate([
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
exports.getRevenueByProduct = getRevenueByProduct;
const getHighValueOrders = async (req, res) => {
    const result = await OrderModel_1.default.aggregate([
        {
            $match: { price: { $gte: 150 } }
        }
    ]);
    res.json(result);
};
exports.getHighValueOrders = getHighValueOrders;
const getTopProducts = async (req, res) => {
    const result = await OrderModel_1.default.aggregate([
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
exports.getTopProducts = getTopProducts;
