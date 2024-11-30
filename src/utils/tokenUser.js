const jwt = require('jsonwebtoken');
const config = require('../config/config')

const genratetoken = (payload) =>{
    const token = jwt.sign(payload,config.JWT_SECRET);
    console.log(token);
    return token;
}
module.exports={
    genratetoken
}