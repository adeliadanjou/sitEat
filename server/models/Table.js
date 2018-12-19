const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tableSchema = new Schema({
  
  mesa: {type:String},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  restaurant: {type: Schema.Types.ObjectId, ref: 'User'},  
  name: String,
  chairs: Number, 
  isAvailable: {type: Boolean, default: false},
  pedido: String,
  status: {type: String, enum: ['pending', 'confirmed', 'done'], default: 'pending'},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;