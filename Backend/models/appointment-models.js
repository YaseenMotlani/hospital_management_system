import mongoose from "mongoose";

let Appointments = new mongoose.Schema({
    time: { type:String },
    date: { type:Date },
    name: { type:String },
    age: { type:Number  },
    doctor: { type:String },
})

let Appointment = mongoose.model("appointments", Appointments);

export default Appointment;