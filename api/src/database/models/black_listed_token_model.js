import mongoose from "mongoose";
const collection = "black_lited_token";
const blacklistedTokenSchema  = new mongoose.Schema({
   token: {
        type: String,
        required: true,
        unique: true
    },
    expiresAt: { 
        type: Date,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },


}, { timestamps: true });
//mongo elimina el refresh token guardado en lista negra, asi no se acumulan.
blacklistedTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

const black_listed_token_model = mongoose.model(collection, blacklistedTokenSchema);

export default black_listed_token_model;
