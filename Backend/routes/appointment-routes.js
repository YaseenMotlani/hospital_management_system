import express from "express";
import { AddAppointment, DeleteAppointment, getAllAppointment, UpdateAppointment } from "../controllers/appointment-controllers.js";

let router = express.Router();

router.get("/appointment", getAllAppointment);
router.post("/add-appointment", AddAppointment);
router.put("/update-appointment/:id", UpdateAppointment);
router.delete("/delete-appointment/:id", DeleteAppointment);

export default router;