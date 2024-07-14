import { NextFunction, Request, Response } from "express";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const {userId ,name, email , password , phone ='', emailVerification=false , phoneVerification=false} = req.body;
    console.log(name)
}