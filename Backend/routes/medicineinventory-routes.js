import mongoose from "mongoose";
import express from "express"
import { AddMedicine, DeleteMedicine, getAllMedicine, UpdateMedicine } from "../controllers/medicineinventory-controllers.js";

let router = express.Router();

router.get("/medicine", getAllMedicine);
router.post("/add-medicine", AddMedicine);
router.put("/update-medicine/:id", UpdateMedicine)
router.delete("/delete-medicine/:id", DeleteMedicine)

export default router;