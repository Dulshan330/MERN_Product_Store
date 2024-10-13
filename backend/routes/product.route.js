import express from "express";
import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// get all products
router.get("/", getProducts);
// add products
router.post("/", createProduct);
// delete products
router.delete("/:id", deleteProduct);
// update product
router.put("/:id", updateProduct);

export default router;
