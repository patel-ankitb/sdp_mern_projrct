const express = require('express')
const Router = express.Router();


const departmentcontroller = require('../controllers/departmentController');

Router.post("/department",departmentcontroller.createDepartment)
Router.get("/department",departmentcontroller.getDepartment);

module.exports = Router;