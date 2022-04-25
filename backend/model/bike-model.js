
const mongoose = require("mongoose")

const bikeSchema = mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"signup"
    },
    heading: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    pic: {
        type: String,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model("bikeTask",bikeSchema)