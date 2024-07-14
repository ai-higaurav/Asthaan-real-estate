import Router from 'express'
const user = Router()
// importing necessary utils and functions
import asyncHandler from '../utils/asyncHanlder';
import { registerUser } from '../controllers/user.controllers';
import verifyWebhookSignature from '../middleware/appwrite/signatureValidation';


user.route('/register').post(verifyWebhookSignature ,asyncHandler(registerUser))

export default user;