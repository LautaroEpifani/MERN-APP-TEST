import Result from '../models/resultModel.js'
import mongoose from "mongoose";

// get all 
export const getResults = async (req, res) => {
    const results = await Result.find({}).sort({createdAt: -1})

    res.status(200).json(results)
}

// get single 
export const getResult = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const result = await Result.findById(id)
    if(!result) {
        return res.status(404).json({error: 'ELement not found'})
    }
    res.status(200).json(result)
}

// create new
export const createResult = async (req, res) => {
    const { quantity, units, newQuantity, newUnits } = req.body
    
    try {
      const result = await Result.create({ quantity, units, newQuantity, newUnits })  
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({error: error.message})  
    }
}

// delete
export const deleteResult = async (req , res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const result = await Result.findOneAndDelete({ _id: id })

    if(!result) {
        return res.status(404).json({error: 'ELement don´t exist'})
    }

    res.status(200).json(result)
}

// update 
export const updateResult = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid id'})
    }

    const result = await Result.findOneAndUpdate({ _id: id, 
        ...req.body
    })

    if(!result) {
        return res.status(404).json({error: 'ELement don´t exist'})
    }

    res.status(200).json(result)
}
