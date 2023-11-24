import {User} from "../controllers/user.js";
import express from "express";

export const userRouter = express.Router();

userRouter.post("/registration", User.registrationAsync)
userRouter.post("/login", User.loginAsync)