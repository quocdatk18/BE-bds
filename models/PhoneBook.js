import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Phonebook = new Schema(
  {
    fullNmae: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, require: true },
    phone: { type: String },
    hotline: { type: String },
    content:{type:String},
    contact:{type:String}
  },
  {
    timestamps: true,
  }
);

export const PhonebookModel = mongoose.model("Phonebooks", Phonebook);
