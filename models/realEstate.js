import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const Characteristics= new Schema({
    bedroom:{type:Number},  // số phòng ngủ
    toilet:{type:Number}, // số phòng wc
    apartment:{type:Number},  // số căn hộ
    direction:{type:String}, // hướng nhà
    court:{type:Number}, // số tòa nhà
    Investor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Investors" }],  //chủ đầu tư
    Juridical:{type:String,require:true},  // pháp lý
    CompletionTime:{type:String,require:true}, // thời điểm hoàn thành
    BuildingDensity:{type:Number,require:true}, // mật độ xây dựng (%)
    Contractors:{type:String,require:true},   // nhà thầu
} ,{
    timestamps: true
}

) // đặc điểm bsđ





const RealEstate= new Schema({
type:{type:String,require:true}, // loại bất động sản
category:{type:String,require:true}, // loại tin đăng
title:{type:String,require:true},
area:{type:String,require:true}, // diện tích
price:{type:Number,require:true},
address:{type:String,require:true},
image:{type:String,require:true},
phone:{type:String,require:true},
Characteristics:[Characteristics],
content:{type:String,require:true},   // chi tiết bds
condition:{type:String,require:true}  // tình trạng
},
{
    timestamps: true,
  }
)
export const RealEstateModel = mongoose.model('RealEstates', RealEstate)











