const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const roleSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    Permissions:[{
        type:Schema.Types.ObjectId,
        ref:'permission'
    }],
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
},{
    timeseries:true
})

module.exports = mongoose.model('Role',roleSchema);