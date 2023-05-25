import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    sender_id: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    receiver_id: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    message: {type:String, required:true}
},
{timestamp:true}
);

const chatModel = mongoose.model('Chat',chatSchema);

export default chatModel;
