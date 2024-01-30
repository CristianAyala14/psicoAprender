import mongoose from "mongoose";

const consultorioSchema = new mongoose.Schema({
    numero: Number,
    disponibilidad: [
        {
            dia:{
                type: String,
                enum: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                default: undefined
            },
            horas: [
                {
                    hora: Number,
                    enum:[8,9,10,11,12,13,14,15,16,17,18,19,20],
                    default: undefined,
                    ocupada: {
                        type: Boolean,
                        default: false,
                    },
                    profesionalId: { type: mongoose.Schema.Types.ObjectId, ref: 'profesional' },
                }
            ]
        }
    ]
});

const consultorioModel = mongoose.model('consultorio', consultorioSchema);