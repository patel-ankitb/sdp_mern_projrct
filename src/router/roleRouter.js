const express = require('express')
const Router = express.Router();

const rolecontroller = require('../controllers/roleController')

Router.post("/role",rolecontroller.createRole)
Router.get("/role",rolecontroller.getRole);

module.exports = Router;