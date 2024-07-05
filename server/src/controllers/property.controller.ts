import { NextFunction, Request, Response } from "express";

// importing necessary utility 
import asyncHandler from "../utils/asyncHanlder";
import ApiResponse from "../utils/apiResponse";
import propertyVal from "../validators/property.validation";
import { ZodError } from "zod";


export const healthCheck = asyncHandler(async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Health Status : OK").send(res)
})

export const registerProperty = asyncHandler(async(req:Request, res:Response , next:NextFunction)=>{
    const resp=  propertyVal.parse(req.body)
    return ApiResponse.success([],"Body Received").send(res)
})

export const propertyApiErrorHandler = async(err:Error , req:Request, res:Response , next:NextFunction)=>{
    if(err instanceof ZodError){
        return ApiResponse.failure([], JSON.parse(err.message)[0]?.message, 400).send(res)
    }

    console.log(err)
}