const userSchema = require('../models/userModel');
const { encryptpassword } = require('../utils/encryptUser');
const tokenutil = require('../utils/tokenUser')
const encrypt = require('../utils/encryptUser');

//--------------------------------create user --------------------------------------------------------------

const createUser = async (req, res) => {

    const hashedpassword = await encrypt.encryptpassword(req.body.password);
    try {
        const userobj = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedpassword,
            role: req.body.role,
            department: req.body.department,
            contact: req.body.contact,
            employmentStatus: req.body.employmentStatus,
            joiningDate: req.body.joiningDate,
            terminationDate: req.body.terminationDate

        }
        const createUser = await userSchema.create(userobj);
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
            message: "not user update....."
        })
    }


}

//--------------------------------- get all user -----------------------------------------------------

const getUser = async (req, res) => {
    try {
        const users = await userSchema.find()
        res.status(400).json({
            mess: "all user fetched...",
            data: users
        })
    } catch (err) {
        res.status(500).json({
            message: "not user ...."
        })
    }
}

//----------------------------------------login user ------------------------------------------------------


const loginUser = async (req, res) => {
    const useremail = req.body.email;
    const userpassword = req.body.password;
    const loginUser = await userSchema.findOne({ email: useremail });

    if (useremail) {
        const isMatch = await encrypt.comparepassword(
            userpassword,
            loginUser.password
        );
        if (isMatch) {
            const token = tokenutil.genratetoken(loginUser.toObject());
            res.status(400).json({
                mess: "user login in successfully !!! ",
                token: token
            })
        } else {
            res.status(400).json({
                mess: "invalid password "
            })
        }
    }else{
        res.status(400).json({
            mess:"user not found ... "
        })
    }
}



//--------------------------------------------- ALL exports model -------------------------------------------------

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    loginUser
}