import dotenv from 'dotenv'
import app from "./app";
import connectToDb from "./config/dbConnection";

dotenv.config({
    path: './.env'
})
connectToDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{ console.log("Server Status :OK")})
})
.catch((err)=>{
    console.log("Server Status :ERROR" , err)
    process.exit(1)
})