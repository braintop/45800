import { Router } from 'express';
import { getProducts,getProductById, createProduct, updateProduct, deleteProduct } from '../conrollers/productController';
import { g1, g2 } from '../middleWare/myfunctions';
const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id',g1, deleteProduct);
export default router;  