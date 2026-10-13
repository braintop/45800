import mongoose, { Schema, model } from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model('Order', orderSchema);
