import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

// importing  schema model
import Property from "../models/property.models";

// importing necessary utility 
import ApiResponse from "../utils/apiResponse";
import propertyVal from "../validators/property.validation";

// importing services 
import { addToDb } from "../services/property.services";


export const healthCheck = async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Health Status : OK").send(res)
}

export const registerProperty = async(req:Request, res:Response , next:NextFunction)=>{
    const payload=  propertyVal.parse(req.body)
    const response = await addToDb(Property, payload)
    if(response){
        return ApiResponse.success([],"Property has been added successfully").send(res)
    }
}

export const propertyApiErrorHandler = async(err:Error , req:Request, res:Response , next:NextFunction)=>{
    if(err instanceof ZodError){
        return ApiResponse.failure([], JSON.parse(err.message)[0]?.message, 400).send(res)
    }

    console.log(err)
}