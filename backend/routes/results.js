import  express  from "express";
import Result from "../models/resultModel.js";
import { createResult, deleteResult, getResult, getResults, updateResult } from "../controllers/resultController.js";

const router = express.Router()

router.get('/', getResults)

router.get('/:id', getResult)

router.post('/', createResult)

router.delete('/:id', deleteResult)

router.patch('/:id', updateResult)

export default router