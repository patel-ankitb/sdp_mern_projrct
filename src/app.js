const config = require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();



app.use(express.json());
const userrouter = require('../src/router/userRouter')
const rolerouter = require('../src/router/roleRouter')
const permissionrouter = require('../src/router/permissionRouter')
const departmentrouter = require('../src/router/departmentRouter')

//---------------------app use---------------------
app.use("/user",userrouter);
app.use("/department",departmentrouter);
app.use("/role",rolerouter);
app.use("/permission",permissionrouter)

// Connect to MongoDB
mongoose.connect(config.DB_URL).then(() => {
    console.log("Connected to MongoDB...");
}).catch((err) => {
    console.log("Error connecting to MongoDB...", err);
})

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});