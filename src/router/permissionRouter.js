const express = require('express');
const Router = express.Router();


const permissioncontroller = require('../controllers/permissionController');


Router.post("/permission",permissioncontroller.createPermission);
Router.get("/permission",permissioncontroller.getPermission)
Router.put("/permission",permissioncontroller.upadtePermission)
Router.delete("/permission",permissioncontroller.deletePermission)


module.exports = Router;