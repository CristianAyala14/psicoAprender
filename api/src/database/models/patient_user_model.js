import mongoose from "mongoose";
const collection = "patient_user_model"; // nombre de la colección en la base de datos

const patient_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  contact: {
    type: String,
    required: true, // puede ser número de teléfono o email
  },

  reason_for_consultation: {
    type: String,
    required: true,
  },
  
  assigned_professional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "professional_user", // debe coincidir con el nombre de tu colección de profesionales
    default: null,        // por defecto "ninguno asignado"
  },
  appointment_day: {
    type: String,
    enum: ['lunes', 'martes','miercoles','jueves','viernes','sabado' ],
    default: 'lunes',
    required: true,       
  },
  

}, { timestamps: true });

const patient_model = mongoose.model(collection, patient_schema);
export default patient_model;