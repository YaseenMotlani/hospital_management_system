import Appointment from "../models/appointment-models.js";

let getAllAppointment = async (req,res) => {
    try {
        const doctor = await Appointment.find({});

        res.json({
            success: true,
            message: "Appointment DATA RETRIEVED SUCCESSFULLY",
            // appointment: appointment,
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Appointment DATA RETRIEVED NOT SUCCESSFULLY"
        });

    }
};

let AddAppointment = async (req,res) => {
    let {time, date, name, age, doctor} = req.body
    console.log("REQ BODY", req.body);

    try {
        await Appointment.create({
            time,
            date,
            name,
            age,
            doctor,
        }).then(() => {
            res.json ({
                success: true,
                message: "Appointment DATA ADDED SUCCESSFULLY"
            })
        })
    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO ADDED Appointment DATA"
        });
    }
}

let UpdateAppointment = async (req,res) => {
    try{
        const {id} = req.params;

        const updateAppointment = await Appointment.findByIdAndUpdate(
            id, req.body, { new: true}
        );

        if (!updateAppointment) {
            return res.json({
                success: false,
                message: "Appointment NOT FOUND"
            });
        }

        res.json({
            success: true,
            message: "Appointment DATA UPDATED SUCCESSFULLY",
            data: updateAppointment
        });

    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO UPDATE Appointment DATA",
            error: error.message
        });
    }
}

let DeleteAppointment = async (req,res) => {
    try{
        const {id} = req.params;

        const deleteAppointment = await Appointment.findByIdAndDelete(
            id, req.body, { new: true}
        );

        if (!deleteAppointment) {
            return res.json({
                success: false,
                message: "Appointment NOT FOUND"
            });
        }

        res.json({
            success: true,
            message: "Appointment DATA DELETE SUCCESSFULLY",
            data: deleteAppointment
        });

    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO DELETE Appointment DATA",
            error: error.message
        });
    }
};


export {getAllAppointment, AddAppointment, UpdateAppointment, DeleteAppointment};