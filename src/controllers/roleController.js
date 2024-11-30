const roleSchema = require('../models/roleModel')

//---------------------------- CREATE ROLE --------------------------------------------------------

const createRole = async (req, res) => {

    try {
        const createRole = await roleSchema.create(req.body);
        res.status(400).json({
            mess: "role create successfully !!! ",
            data: createRole
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//---------------------------------------- GET ALL ROLE --------------------------------------------

const getRole = async(req,res) => {
    try {
        
        const roles = await roleSchema.find({status:"active"})
        res.json({
            mess:"roles fetched successfully !! ",
            data:roles
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//--------------------------------------------- ALL exports model -------------------------------------------------

module.exports = {
    createRole,
    getRole
}