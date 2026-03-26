import express from "express";
import { AddDoctor, DeleteDoctor, getAllDoctor, UpdateDoctor } from "../controllers/doctors-controllers.js";
import { protect } from "../middleware/auth-middleware.js";

let router = express.Router();

router.get("/doctor", protect, getAllDoctor);
router.post("/add-doctor", protect, AddDoctor);
router.put("/update-doctor/:id", protect, UpdateDoctor);
router.delete("/delete-doctor/:id", protect, DeleteDoctor);

export default router;