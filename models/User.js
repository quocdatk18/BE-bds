import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const User = new Schema({
    UserName: { type: String,require:true },
    fullNmae:{ type: String,require:true },
    birthday:{typpe :Date,require:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String ,require:true},
    gender:{type:String,require:true},
    type:{type:String},
    phone: { type: String },
    isAdmin: { type: Boolean },
    IDCard:{type:Number,require:true}
},
    {
        timestamps: true,
    },
)

export const UserModel = mongoose.model('users', User)