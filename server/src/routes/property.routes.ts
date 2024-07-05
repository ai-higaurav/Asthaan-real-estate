import Router from 'express'

const property = Router()

// importing controllers
import { 
    healthCheck,
    registerProperty,
    propertyApiErrorHandler
} from '../controllers/property.controller';

property.route('/health').get(healthCheck)
property.route('/getlisted').post(registerProperty)

// Api Error Handling
property.use(propertyApiErrorHandler)


export default property;