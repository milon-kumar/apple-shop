import express from "express";
import { product,productSave } from "../controllers/backend/ProductController.js";
const router = express.Router();

router.get('/product',product)
router.post('/product/create',productSave)
// router.get('/product/show/:id',productShow)
// router.get('/product/update/:id',productUpdate)
// router.get('/product/delete/:id',productDelete)

export default router