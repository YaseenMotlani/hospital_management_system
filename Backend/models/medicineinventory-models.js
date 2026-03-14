import mongoose from "mongoose";

let MedicineInventory = new mongoose.Schema({
    name : { type:String, required: true },
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    type : { type:String, required: true },
    price : { type:Number, required: true },
    stock : { type:Number, required: true },
    expiry : { type:Date, required: true },
    manufacture : { type:String },
    
})

let Medicine = mongoose.model("medicine", MedicineInventory)

export default Medicine;