import mongoose from "mongoose";

const ChatModel = new mongoose.Schema({
    Chatname: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],

    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    isAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
    {
        timestamps: true
    })

export default  mongoose.model("Chat" , ChatModel)