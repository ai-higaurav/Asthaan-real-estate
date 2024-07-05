import { NextFunction, Request, Response } from "express";

// importing necessary utility 
import asyncHandler from "../utils/asyncHanlder";
import ApiResponse from "../utils/apiResponse";

export const healthCheck = asyncHandler(async(req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Health Status : OK").send(res)
})

