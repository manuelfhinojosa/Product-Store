import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct); //To create somenthing you will usually use post method

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
