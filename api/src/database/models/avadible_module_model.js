import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const collection = "avadible_module";
const avadible_module_schema = new mongoose.Schema({
   professional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'professional_user',
    required: true,
  },
  time: {
    type: String,
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

avadible_module_schema.plugin(mongoosePaginate)

const avadible_module_model = mongoose.model(collection, avadible_module_schema);

export default avadible_module_model;
