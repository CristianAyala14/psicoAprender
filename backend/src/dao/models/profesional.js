import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const profesionalSchema = new mongoose.Schema({
    codigo: Number,
    nombre: String,
    apellido: String,
    especialidad: String,
    duracionSesion: Number,
    contacto: Number,
    disponibilidad: [
        {
            dia:{
                type: String,
                enum: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                required: true,
            },
            horadeInicio:{
                type: Number,
                required: true,
            },
            horas:{
                type: Number,
                enum:[1,2,3,4,5,6,7,8,9,10,11,12],
                default: undefined
            },
            consultorio: Number
        }
    ],
    consultoriosAsignados:[{num: Number}],
    turnos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'turnos' }]
});

profesionalSchema.plugin(mongoosePaginate);

const Profesional = mongoose.model('profesional', profesionalSchema);

export default Profesional;