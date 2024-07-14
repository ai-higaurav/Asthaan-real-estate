import {NextFunction, Request, Response, Router} from "express"
import { Webhook, WebhookRequiredHeaders, WebhookUnbrandedRequiredHeaders } from "svix";

import ApiResponse from "../../../utils/network/ApiResponse";
import AsyncHandler from "../../../utils/network/AsyncHandler";
import { addToDb , deleteUser, isExists } from "../../../controllers/dbOperations/users";
import User from "../../../models/user.model";

const user = Router()

user.post('/webhook', AsyncHandler(async(req:Request , res:Response , next:NextFunction)=>{
    // checking credential for webhooks
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
      return ApiResponse.failure([],"Webhook secrect key is required",400).send(res)
    }
    // getting header and payload
    const headers=req.headers as WebhookRequiredHeaders | WebhookUnbrandedRequiredHeaders | Record<string, string>
    const payload = JSON.stringify(req.body);
     
    const wh= new Webhook(process.env.WEBHOOK_SECRET as string)
    let evt: any;    
    evt = wh.verify(payload , headers )

    const eventType=evt.type

    
    if(eventType==="user.created"){
      
      const {id , email_addresses:[{email_address:email}] , first_name , last_name , image_url}=evt?.data

      interface payload {
        username:string,
        fname:string,
        lname:string,
        profile:string
        email:string
      }
      
      const payload:payload={
        username: id,
        fname: first_name,
        lname: last_name,
        profile: image_url,
        email: email
      }
      const isUserExists = await isExists (User, email)

      if(isUserExists){
        console.log("user already exsits")
        return ApiResponse.failure([],"User already exists",400).send(res)
      }

      const response = await addToDb(User,payload)
      return ApiResponse.success([],"User has been successfully registered",200).send(res)
    }

    if(eventType==="user.deleted"){

      const {id}=evt?.data
      const response = await deleteUser (User, id)

      if(response){
        return ApiResponse.success([],"User has been deleted successfully",200).send(res)
      }
      
    }
  
}) )

export default user;