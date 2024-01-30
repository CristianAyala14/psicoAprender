import mongoose from "mongoose";

const turnoSchema = new mongoose.Schema({
    dia: String,
    horaInicio: Number,  // Hora de inicio del rango de horas disponibles
    duracion: Number,     // Hora de fin del rango de horas disponibles
    consultorio: Number,
    profesional: String,
    paciente: {
        nombre: String,
        apellido: String,
        contacto: Number,
        pagoAnticipado: {
            type: Boolean,
            default: false
        }
    }
});

const Turno = mongoose.model('turnos', turnoSchema);

export default Turno;