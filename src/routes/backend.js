import express from "express";
import { product,productSave } from "../controllers/backend/ProductController.js";
import {  createSider } from "../controllers/backend/SliderController.js";
const router = express.Router();

router.get('/product',product)
router.post('/product/create',productSave)
// router.get('/product/show/:id',productShow)
// router.get('/product/update/:id',productUpdate)
// router.get('/product/delete/:id',productDelete)

router.post('/slider/create',createSider)

export default router