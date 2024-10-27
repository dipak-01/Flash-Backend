import mongoose from "mongoose";

const playgroundSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Playground name is required"]
    },
    ownerId:{
        type:mongoose.Schema.ObjectId,
        ref:"owner",
        required: [true, "Owner Id is required"]
    },
    location:{
        type:String,
        required:[true, "Playground Location is required"]
    },
    timings:{
        type:String,
        required:[true, "Playground timings are required"],
        default: "24 X 7"
    },
    sports:{
        type:String,
        required:[true, "Sports allowed are required"]
    },
    price:{
        type:Number,
        required:[true, "Price per hour is required"],
        default: 0
    }
})

export const playground = new mongoose.model("playground", playgroundSchema);