import mongoose from "mongoose";
const collection = "admin_users";
const admin_user_schema = new mongoose.Schema({
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
  profileImage: {
      type: String, // Almacena la URL o path de la imagen
      default: "https://muytecnologicos.com/wp-content/uploads/2023/04/Autenticacion-de-usuario.png"
  },
  numer: String

},{timestamps:true})

const admin_user_model = mongoose.model(collection, admin_user_schema);

export default admin_user_model;
