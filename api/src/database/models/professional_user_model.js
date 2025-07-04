import mongoose from "mongoose";
const collection = "professional_user";
const professional_user_schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
  days_avadible: {
    type: String, // Ej: "Psicología", "Fonoaudiología"
    enum: ['Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado','None' ],
    default: 'None',
    required: true,
  },
  pacients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pacient_user_model'
  }],
  numer: String

},{timestamps:true})

const professional_user_model = mongoose.model(collection, professional_user_schema);

export default professional_user_model;
