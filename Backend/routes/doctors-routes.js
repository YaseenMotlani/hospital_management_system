import express from "express";
import { AddDoctor, DeleteDoctor, getAllDoctor, UpdateDoctor } from "../controllers/doctors-controllers.js";

let router = express.Router();

router.get("/doctor", getAllDoctor);
router.post("/add-doctor", AddDoctor);
router.put("/update-doctor/:id", UpdateDoctor);
router.delete("/delete-doctor/:id", DeleteDoctor);

export default router;