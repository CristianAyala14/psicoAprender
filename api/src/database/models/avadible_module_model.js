import mongoose from "mongoose";
const collection = "avadible_module";
const avadible_module_schema = new mongoose.Schema({
   profesional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'professional_user',
    required: true,
  },
  time: {
    type: String, // Ej: "14:30"
    required: true,
  },
  state: {
    type: String,
    enum: ['disponible', 'ocupado', 'cancelado'],
    default: 'disponible',
  },
  assigned_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin_User',
  },
  pacient: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'pacient_user_model'
  }]

},{timestamps:true})

const avadible_module_model = mongoose.model(collection, avadible_module_schema);

export default avadible_module_model;
