import mongoose, { Document, Schema } from 'mongoose'

interface IProperty extends Document {
    listingType: 'sale' | 'rent';
    propertyType: 'apartment' | 'house' | 'villa';
    buildingType: 'residential' | 'commercial';
    furnishedStatus: 'furnished' | 'semi Furnished' | 'full furnished';
    possessionStatus: 'ready to move' | 'under constraction';
    propertyAge: number;
    unitNo: number;
    rooms: number;
    bathroom: number;
    area: number;
    price: number;
    totalFloors: number;
    floorNo: number;
    balconyType: 'open' | 'covered' | 'none';
    amenities: string[];
    waterSource: 'municipal corporation' | 'borewell' | 'tank';
    facingDirection: string[];
    additionalDetails: string;
    images: string[];
    status: 'active' | 'sold';
    isVerified: boolean;
    state: string;
    city: string;
    locality: string;
    pinCode: number;
    phone: number;
    seller: mongoose.Types.ObjectId;
  }

const propertySchema: Schema<IProperty> = new mongoose.Schema({
    listingType: {
        type: String,
        enum: ['sale', 'rent'],
        required: true
    },
    propertyType: {
        type: String,
        enum: ["apartment", "house", "villa"],
        required: true
    },
    buildingType: {
        type: String,
        enum: ["residential", "commercial"],
        required: true
    },
    furnishedStatus: {
        type: String,
        enum: ["furnished", "semi furnished", "full furnished"],
        required: true
    },
    possessionStatus: {
        type: String,
        enum: ["ready to move", "under constraction"],
        required: true
    },
    propertyAge: {
        type: Number,
        required: true
    },
    unitNo: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalFloors: {
        type: Number,
        required: true
    },
    floorNo: {
        type: Number,
        
    },
    balconyType: {
        type: String,
        enum: ['open', 'covered', 'none'],
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
    waterSource: {
        type: String,
        enum: ['municipal corporation', 'borewell', 'tank'],
        required: true
    },
    facingDirection: {
        type: [String],
        required: true
    },
    additionalDetails: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        default:[]
    },
    status: {
        type: String,
        enum: ['active', 'sold'],
        default:"active"
    },
    isVerified: {
        type: Boolean,
        required: true,
        default:false
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


const Property = mongoose.model<IProperty>('Property',propertySchema, 'listing')

export default Property;