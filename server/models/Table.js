const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const tableSchema = new Schema({

  mesa: {type:String, unique: true},
  chairs: Number, 
  isAvailable: {type: Boolean, default: true},
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;