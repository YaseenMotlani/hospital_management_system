import Medicine from "../models/medicineinventory-models.js"

let getAllMedicine = async (req,res) => {
    try {
        const medicine = await Medicine.find({});

        res.json({
            success: true,
            message: "MEDICINE DATA RETRIEVED SUCCESSFULLY",
            data: medicine,
        })
    } catch (error) {
        res.json({
            success: false,
            message: "MEDICINE DATA RETRIEVED SUCCESSFULLY"
        });

    }
};

let AddMedicine = async (req,res) => {
    let {name,code,type,price,stock,expiry,manufacture} = req.body
    console.log("REQ BODY", req.body);

    try {
        await Medicine.create({
            name,
            code,
            type,
            price,
            stock,
            expiry,
            manufacture,
        }).then(() => {
            res.json ({
                success: true,
                message: "MEDICINE DATA ADDED SUCCESSFULLY",
                data: medicine,
            })
        })
    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO ADDED PATIENT DATA"
        });
    }
}

let UpdateMedicine = async (req,res) => {
    try{
        const {id} = req.params;

        const updateMedicine = await Medicine.findByIdAndUpdate(
            id, req.body, { new: true}
        );

        if (!updateMedicine) {
            return res.json({
                success: false,
                message: "MEDICINE NOT FOUND"
            });
        }

        res.json({
            success: true,
            message: "MEDICINE DATA UPDATED SUCCESSFULLY",
            data: updateMedicine
        });

    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO UPDATE MEDICINE DATA",
            error: error.message
        });
    }
}

let DeleteMedicine = async (req,res) => {
    try{
        const {id} = req.params;

        const deleteMedicine = await Medicine.findByIdAndDelete(
            id, req.body, { new: true}
        );

        if (!deleteMedicine) {
            return res.json({
                success: false,
                message: "MEDICINE NOT FOUND"
            });
        }

        res.json({
            success: true,
            message: "MEDICINE DATA DELETE SUCCESSFULLY",
            data: deleteMedicine
        });

    } catch (error) {
        res.json({
            success: false,
            message: "FAILED TO DELETE MEDICINE DATA",
            error: error.message
        });
    }
}


export { getAllMedicine, AddMedicine, UpdateMedicine, DeleteMedicine}