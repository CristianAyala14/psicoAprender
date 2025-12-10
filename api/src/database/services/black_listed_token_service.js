import black_listed_token_model from "../models/black_listed_token_model.js"

class black_listed_token_service{
     create = async (token, expiresAt, userId) => {
        return await black_listed_token_model.create({ token, expiresAt, userId });
    }

    findByReference = async (token) => {
        return await black_listed_token_model.findOne({ token });
    }
    


}

export {black_listed_token_service};
