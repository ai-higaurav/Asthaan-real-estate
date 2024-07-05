import mongoose, { Document, Schema } from 'mongoose'

interface IProperty extends Document {
    listingType: 'Sale' | 'Rent';
    propertyType: 'Apartment' | 'House' | 'Villa';
    buildingType: 'Residential' | 'Commercial';
    furnishedStatus: 'Furnished' | 'Semi Furnished' | 'Full Furnished';
    possessionStatus: 'Ready To Move' | 'Under Construction';
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
        enum: ['Sale', 'Rent'],
        required: true
    },
    propertyType: {
        type: String,
        enum: ['Apartment', 'House', 'Villa'],
        required: true
    },
    buildingType: {
        type: String,
        enum: ['Residential', 'Commercial'],
        required: true
    },
    furnishedStatus: {
        type: String,
        enum: ['Furnished', 'Semi Furnished', 'Full Furnished'],
        required: true
    },
    possessionStatus: {
        type: String,
        enum: ['Ready To Move', 'Under Construction'],
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
        required: true
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
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
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