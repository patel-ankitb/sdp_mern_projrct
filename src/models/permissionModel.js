const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const permissionSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    module:{
        type:String,
        required:true
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
},{
    timestamps:true
})


module.exports = mongoose.model('Permission',permissionSchema)