const userSchema = require('../models/userModel')

//--------------------------------create user --------------------------------------------------------------

const createUser = async (req, res) => {
    try {
        const createUser = await userSchema.create(req.body);
        res.status(400).json({
            mess: "user create successfully !! ",
            data: createUser
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//--------------------------------delete user --------------------------------------------------------------


const deleteUser = async (req, res) => {

    try {

        const id = req.params.id;

        const deleteUser = await userSchema.findByIdAndDelete(id);
        if (deleteUser == null) {
            res.status(400).json({
                mess: "user not found..."
            })
        } else {
            res.json({
                mess: "user delete successfully !!!",
                data: deleteUser
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//-----------------------------------------update user --------------------------------------------------------

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userobj = req.body;
        const updateUser = await userSchema.findByIdAndUpdate(id, userobj);
        if (updateUser == null) {
            res.status(400).json({
                mess: "user not found..."
            })
        } else {
            res.json({
                mess: "user update successfully !!!",
                data: updateUser
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }


}

//--------------------------------- get all user -----------------------------------------------------

const getUser = async(req,res) => {
    try {
        const users = await userSchema.find()
        res.status(400).json({
            mess:"all user fetched...",
            data:users
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


module.exports={
    createUser,
    deleteUser,
    updateUser,
    getUser
}