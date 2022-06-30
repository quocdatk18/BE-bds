import mongoose from "mongoose";

const Schema = mongoose.Schema;


const Investor= new Schema({
    address:{type:String,require:true},
    MainArea:{type:String,require:true},
    SubFields:{type:String,require:true},
    email: { type: String, required: true, unique: true },
    Website:{type:String,require:true},
    realEstate:{type:mongoose.Schema.Types.ObjectId,ref: "RealEstates" }
    }
    ,{
        timestamps: true
    }
    
    
    ) 

export const InvestorModel = mongoose.model("Investors", Investor);
