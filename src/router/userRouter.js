const  express = require('express')
const Router = express.Router();

const userController = require('../controllers/userController')
const authmiddleware = require('../middleware/Authmiddleware')


Router.post("/user", userController.createUser);
Router.get("/user",authmiddleware.vaildateuser,userController.getUser);
Router.put("/user",userController.updateUser);
Router.delete("/user",userController.deleteUser);
Router.post("/login",userController.loginUser);



module.exports = Router;