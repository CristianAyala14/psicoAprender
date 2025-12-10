import { admin_user_dao } from "../database/indexDb.js";
import { professional_user_dao } from "../database/indexDb.js";
import { black_listed_token_dao } from "../database/indexDb.js";

import bcrypt from "bcryptjs";
import {genAccessToken, genRefreshToken } from "../config/tokensControl.js"


class authController{
    // static signUp = async(req,res)=>{
    //     const {userName, email, password} = req.body;
        
    //     try {
    //         const founded = await userDao.getBy(email);
    //         if(founded){
    //             return res.status(400).json({message: "The user is already registered."})
    //         }
    //         const hash = await bcrypt.hash(password,10)
            
    //         const newUser = {
    //             userName,
    //             email,
    //             password: hash
    //         }
    //         const created = await userDao.create(newUser)

    //         //token auth
    //         const userAuthToken = {
    //             id: created._id,
    //             userName: created.userName,
    //             email: created.email,
    //         }
    //         const accessToken = genAccessToken(userAuthToken)
    //         const refreshToken = genRefreshToken(userAuthToken)
    //         res.cookie("refreshToken", refreshToken, {httpOnly: true, secure: true, sameSite: 'Lax', path: "/api/auth/refresh"})
            
    //         //payload
    //         const user = {
    //             id: created._id,
    //             userName: created.userName,
    //             email: created.email,
    //             profileImage: created.profileImage
    //         }


    //         res.status(200).json({
    //         status: "success",
    //         message: "User registered successfully.",
    //         payload: user,
    //         accessToken: accessToken
    //         })
    //     } catch (error) {
    //         return res.status(500).json({message: error.message})
    //     }

    // }
    static logIn = async(req,res)=>{
        const {email, password} = req.body;
        
        try {
            const adminUserDoc = await admin_user_dao.getByReference(email);
            const professionalUserDoc = await professional_user_dao.getByReference(email);

            const validUserDoc = adminUserDoc || professionalUserDoc;

            if(!validUserDoc){
            return res.status(400).json({message: "Invalid email."})
            } 
            const validUser = validUserDoc.toObject();
                        
            const validPassword = await bcrypt.compare(password, validUser.password)
            if(!validPassword){
                return res.status(400).json({message: "Invalid password."})
            }

            //auth token
            const user = {
                id: validUser._id,
                name: validUser.name,
                last_name: validUser.last_name,
                email: validUser.email,
                rol: validUser.rol
            }

            const accessToken = genAccessToken(user)
            const refreshToken = genRefreshToken(user)

            res.cookie("refreshToken", refreshToken, {httpOnly: true, secure: true, sameSite: 'Lax', path: "/api/auth/refresh"})

             //payload
            const userPayload = {
                id: validUser._id,
                name: validUser.name,
                last_name: validUser.last_name,
                description: validUser.description,
                email: validUser.email,
                profileImage: validUser.profileImage,
                contact: validUser.contact,
                rol: validUser.rol
            }

             // Según el rol, agregás datos específicos
            if (validUser.rol === "professional") {
                userPayload.profession_1 = validUser.profession_1
                userPayload.profession_2 = validUser.profession_2
                userPayload.days_avadible = validUser.days_avadible
                userPayload.patients = validUser.patients
                userPayload.sede = validUser.sede
            }

            res.status(200).json({
                status: "success",
                message: "Logged in succesfully.",
                payload: userPayload,
                accessToken: accessToken
            })

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
    static logOut = async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        try {
            if (refreshToken) {
            const decoded = jwt.decode(refreshToken);
            // Sacás la fecha de expiración del token (exp es en segundos)
            const expiresAt = new Date(decoded.exp * 1000);
            // Sacás el userId del token
            const userId = decoded.id;
            // Guardás el token en la blacklist para invalidarlo
            await black_listed_token_dao.create({
                token: refreshToken,
                expiresAt,
                userId
            });
            }
            // Limpiás la cookie del refresh token en el cliente
            res.cookie("refreshToken", "", {
            httpOnly: true,
            secure: true,
            sameSite: "Lax",
            path: "/api/auth/refresh",
            expires: new Date(0),
            });

            res.status(200).json({
            status: "success",
            message: "Logged out successfully.",
            });
        } catch (error) {
            res.status(500).json({ message: "Error logging out" });
        }
    };
    static refreshToken = async (req, res) => {
        const user_id = req.user.id;
        try {
            const adminUserDoc = await admin_user_dao.getById(user_id);
            const professionalUserDoc = await professional_user_dao.getById(user_id);
            const validUserDoc = adminUserDoc || professionalUserDoc;

            if (!validUserDoc) {
                return res.status(401).json({ message: "Could not refresh the access token. User not found." });
            }

            const validUser = validUserDoc.toObject();

            const user = {
                id: validUser._id,
                name: validUser.name,
                last_name: validUser.last_name,
                email: validUser.email,
                rol: validUser.rol
            };

            const newAccessToken = genAccessToken(user);

            res.status(200).json({
                status: "success",
                message: "New access token generated.",
                payload: user,
                accessToken: newAccessToken
            });

        } catch (error) {
            return res.status(500).json({ message: "Error generating access token." });
        }
    };
}


export {authController};