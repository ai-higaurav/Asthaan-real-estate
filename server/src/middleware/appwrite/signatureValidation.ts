
import crypto from 'crypto'
import { NextFunction, Request, Response } from 'express'
import asyncHandler from '../../utils/asyncHanlder'
import ApiResponse from '../../utils/apiResponse'
const verifyWebhookSignature = asyncHandler(async(req:Request , res:Response , next:NextFunction)=>{

    const webhookSignatureKey = process.env.WEBHOOK_SIGNATURE_KEY;

    if(!webhookSignatureKey){
        console.error('WEBHOOK_SIGNATURE_KEY is not defined');
        return ApiResponse.failure([], 'Internal Server Error', 500).send(res);
    }

    const baseUrl = process.env.BASE_URL as string;
    const endpoint = '/api/v1/user/register';
    const token = crypto.createHmac('sha1', webhookSignatureKey)
    .update(`${baseUrl}${endpoint}${JSON.stringify(req.body)}`)
    .digest().toString('base64');

    if (token !== req.headers['x-appwrite-webhook-signature']) {
        console.warn('Unauthorized Access: Invalid webhook signature');
        return ApiResponse.failure([], 'Unauthorized Access', 400).send(res);
    }

    next()
    
})

export default verifyWebhookSignature;