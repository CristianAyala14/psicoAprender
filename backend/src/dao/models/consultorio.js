import mongoose from "mongoose";

const consultorioSchema = new mongoose.Schema({
    numero:{
        type:Number,
        enum:[1,2,3,4,5,6,7,8],
        require: true
    },
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