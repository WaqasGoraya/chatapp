import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    image:{type:String, required:true, trim:true},
    is_online:{type:String, default:'0'},
},
{timestamps:true}
);

const userModel = mongoose.model('User',userSchema);

export default userModel;