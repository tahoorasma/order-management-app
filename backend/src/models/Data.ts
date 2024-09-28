import mongoose, { Schema, InferSchemaType } from "mongoose";

const dataSchema = new Schema({
  customerName: { type: String, trim: true, required: false },
  item: { type: String, trim: true, required: false },
  orderNo: { type: String, trim: true, required: false, unique: true },
  customerPhone: { type: String, trim: true, required: false },
  customerAddress: { type: String, trim: true, required: false },
  customerEmail: { type: String, trim: true, required: false },
  status: { type: String, trim: true, required: false }
});

export type dataSchema= InferSchemaType<typeof dataSchema>;
export const Data = mongoose.model("OrderDataBase", dataSchema);