const permissionSchema = require('../models/permissionModel')

//----------------------------------CREATE PERMISSION ------------------------------------------
const createPermission = async (req, res) => {

    try {
        const createPermission = await permissionSchema.create(req.body);
        res.status(400).json({
            mess: "peermission create sucessfully !!!",
            data: createPermission
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}
//---------------------------DELETE PERMISSION -------------------------------------------

const deletePermission = async (req, res) => {
    try {

        const id = req.params.id;
        const deletePermission = await permissionSchema.findByIdAndDelete(id);
        if (deletePermission == null) {
            res.status(400).json({
                mess: "id not found !!!"
            })
        } else {
            res.json({
                mess: "permission delete successfully !!!!",
                data: deletePermission
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//------------------------------------- UPDATE PERMISSION ------------------------------------

const upadtePermission = async(req,res) => { 

    const id = req.params.id;
    const permissionobj = req.body;

    try{
    const upadtePermission = await permissionSchema.findByIdAndUpdate(id,permissionobj);

    if(upadtePermission == null ){
        res.status(400).json({
            mess: "permission -> id is  not found !!!"
        })
    }else{
        res.json({
            mess:"permission update sucessfully !!!",
            data:upadtePermission
        })
    }
    }catch(err){
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//------------------------------------------- GET ALL PERMISSION ---------------------------------------------
const getPermission = async(req,res) => {
    try {
        const permission = await permissionSchema.find({status:"active"})
        res.json({
            mess:"permission fetched sucessfuly !!",
            data:permission
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


//--------------------------------------------- ALL exports model -------------------------------------------------
module.exports ={
    createPermission,
    deletePermission,
    upadtePermission,
    getPermission
}