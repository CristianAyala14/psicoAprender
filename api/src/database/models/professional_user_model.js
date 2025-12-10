import mongoose from "mongoose";
const collection = "professional_user";
const professional_user_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true
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
  description: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  profession_1: {
    type: String, // Ej: "Psicología", "Fonoaudiología"
    enum: ['psicologia', 'fonoaudiologia','terapia_ocupacional','estimulacion_temprana','psicopedagogia', 'psicologia_infantil'],
    default: 'psicologia',
    required: true,
  },
  profession_2: {
    type: String, // Ej: "Psicología", "Fonoaudiología"
    enum: ['PS', 'TCC','INT','DBT','NONE' ],
    default: 'NONE',
    required: true,
  },
  profileImage: {
      type: String, // Almacena la URL o path de la imagen
      default: "https://muytecnologicos.com/wp-content/uploads/2023/04/Autenticacion-de-usuario.png"
  },
  days_avadible: [{
    type: String,
    enum: ['lunes','martes','miercoles','jueves','viernes','sabado'],
    required: true,
  }],
  patients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient_user_model'
  }],
  
  sede: {
    type: String, 
    enum: ['uno', 'dos' ],
    default: 'uno',
    required: true,
  },
  rol: {
    type: String,
    require: true
  }

},{timestamps:true})

const professional_user_model = mongoose.model(collection, professional_user_schema);

export default professional_user_model;
