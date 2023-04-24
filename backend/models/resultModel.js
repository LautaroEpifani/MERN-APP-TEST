import mongoose from "mongoose";

const Schema = mongoose.Schema

const resultSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    units: {
        type: String,
        required: true
    },
    newQuantity: {
        type: Number,
        required:true
    },
    newUnits: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Result', resultSchema)