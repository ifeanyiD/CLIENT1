import express from "express";
import upload from "../config/multer.js";
import { deleteImage, uploadImages } from "../controller/uploader.js";

const router = express.Router();

router.post("/upload", upload.array("images", 6), uploadImages);
router.delete("/delete/:public_id", deleteImage);

export default router;