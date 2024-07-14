import Router from 'express'

const property = Router()

import asyncHandler from '../utils/asyncHanlder';
// importing controllers
import { 
    healthCheck,
    registerProperty,
    propertyApiErrorHandler
} from '../controllers/property.controller';


property.route('/health').get(asyncHandler(healthCheck))
property.route('/getlisted').post(asyncHandler(registerProperty))

// Api Error Handling
property.use(propertyApiErrorHandler)


export default property;