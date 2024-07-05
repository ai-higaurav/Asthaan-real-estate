import Router from 'express'

const property = Router()

// importing controllers
import { healthCheck } from '../controllers/property.controller';


property.route('/health').get(healthCheck)

export default property;