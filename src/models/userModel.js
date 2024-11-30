const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:"Role"
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:"Department"
    },
    contact:{
        type:String,
        required:true
    },
    employmentStatus:{
        type: String,
        enum: ['active', 'inactive', 'terminated',"Resigned","Retired","Notice Period"],
        default: 'active'
    },
    joiningDate:{
        type:Date,
        required:true
    },
    terminationDate:{
        type:Date
    },
},{
    timestamps:true
})

module.exports = mongoose.model('user',userSchema)