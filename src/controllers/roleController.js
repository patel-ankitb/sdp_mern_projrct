const roleSchema = require('../models/roleModel')



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


module.exports = {
    createRole,
    getRole
}