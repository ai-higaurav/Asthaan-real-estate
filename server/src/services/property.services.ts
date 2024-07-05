import { Document, Model } from 'mongoose';

export const addToDb = async <T extends Document> (schemaModel:Model<T>, payload:{}={}): Promise<T> =>{
    const data = new schemaModel(payload)
    const savedData = await data.save()
    return savedData;
}