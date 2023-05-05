import mongoose from "mongoose";

const MessageModel = mongoose.Schema ({
    Sender:{
        type:mongoose.Schema.Types.ObjectId , 
        ref:"User"
    },
    Content:{
        type:String , 
        trim: true
    } ,
    Chat:{
        type:mongoose.Schema.Types.ObjectId , 
        ref:"Chat"

    }
     
}
, 
 {timestamps: true})

 module.exports = mongoose.model("Message"  , MessageModel)