const departmentSchema = require('../models/departmentModel')


//---------------------------- CREATE DEPARTMENT --------------------------------------------------------

const createDepartment = async (req, res) => {
    try {

        const createdepartmet = await departmentSchema.create(req.body);
        res.status(404).json({
            mess: "Department create successfully !!!!!",
            data: createdepartmet
        })

    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })

    }
}

//-----------------------------------GET ALL DEPARTMENT ---------------------------------------------------

const getDepartment = async (req, res) => {
    try {
        const departments = await departmentSchema.find({ status: "active" });
        res.json({
            mess:"department fetched sucessfully !!",
            data:departments
        })

    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = {
    createDepartment,
    getDepartment
}