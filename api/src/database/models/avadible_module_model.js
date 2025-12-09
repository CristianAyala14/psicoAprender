import mongoose from "mongoose";
const collection = "avadible_modules";
const avadible_module_schema = new mongoose.Schema({
   professional: {
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
  day: {
    type: String, // Ej: "Psicología", "Fonoaudiología"
    enum: ['lunes', 'martes','miercoles','jueves','viernes','sabado' ],
    default: 'lunes',
    required: true,
  },
  assigned_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin_User',
  },
  patient: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'pacient_user_model'
  }],
  sede: {
    type: String,
    enum: ['uno', 'dos'],
    default: 'uno',
    required: true,
  },
  mode: {
    type: String,
    enum: ['semanal', 'quincenal'],
    default: 'semanal',
    required: true,
  }

},{timestamps:true})

const avadible_module_model = mongoose.model(collection, avadible_module_schema);

export default avadible_module_model;
