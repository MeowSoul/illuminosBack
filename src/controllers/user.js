import {userModel} from "../models/userModel.js";
import jwt from "jsonwebtoken"

export class User {

    static async registrationAsync(req, res){
        try {
            if (!req.body) {
                return res.status(401).json({
                    errorMessage:"Отсутствует тело запроса"
                })
            }

            const login = req.body.login

            if(!login ) {
                return res.status(401).json({
                    errorMessage:"Отсутствует логин"
                })
            }

            const password = req.body.password

            if(!password ) {
                return res.status(401).json({
                    errorMessage:"Отсутствует пароль"
                })
            }

            const user = await userModel.findOne({where: {login: login}})

            if (user) {
                return res.status(401).json({
                    errorMessage: "Пользователь с таким логином уже существует"
                })
            }

            await userModel.create({
                login: login,
                password: password
            })

            return res.json(null)
        }
        catch (err) {
            return res.status(500).json({
                errorMessage: err.message
            })
        }
    }

    static async loginAsync(req, res) {
        try {
            if (!req.body) {
                return res.status(401).json({
                    errorMessage:"Отсутствует тело запроса"
                })
            }

            const {login} = req.body

            if (!login) {
                return res.status(401).json({
                    errorMessage: "Неверный логин или пароль"
                })
            }

            const {password} = req.body

            if (!password) {
                return res.status(401).json({
                    errorMessage: "Неверный логин или пароль"
                })
            }

            const user = await userModel.findOne({
                where: {
                    login: login,
                    password: password
                }
            })

            if (!user) {
                return res.status(401).json({
                    errorMessage: "Неверный логин или пароль"
                })
            }

            const token = jwt.sign({
                id: user.id,
                login: user.login,
                role: user.role
            }, "secret", {expiresIn: "24h"})

            return res.json({
                access_token: token
            })

        }
        catch (err) {
            return res.status(500).json({
                errorMessage: err.message
            })
        }
    }

}