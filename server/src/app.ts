import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json({limit:"16kb"}))
app.use(cookieParser())

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
    
}))

// importing routes
import property from './routes/property.routes'
import user from './routes/user.routes'

// config routes
app.use('/api/v1/property',property)
app.use('/api/v1/user', user)

export default app;