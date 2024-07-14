import mongoose,{Document, Schema , Types} from "mongoose";

interface IUser extends Document {
    userId:string
    
}