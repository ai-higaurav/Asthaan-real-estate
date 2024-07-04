import mongoose from 'mongoose'

const connectToDb = async()=>{
    try {
        const con = await mongoose.connect(process.env.URI as string,{dbName:process.env.MONGO_DBNAME as string})
        console.log(`Connected to ${con.connection.host}`)
    } catch (error) {
        throw error
    }
}

export default connectToDb;