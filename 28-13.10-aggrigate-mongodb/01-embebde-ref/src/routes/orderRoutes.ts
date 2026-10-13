import { Router } from 'express';
import { createOrder, getOrders, getTotalRevenue,getRevenueByProduct, getHighValueOrders,getTopProducts } from '../conrollers/orderController';

const router = Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/total-revenue', getTotalRevenue);
router.get('/revenue-by-product', getRevenueByProduct);
router.get('/high-value-orders', getHighValueOrders);
router.get('/top-products', getTopProducts);
export default router;