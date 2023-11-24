import express from "express";
import {userRouter} from "./user.js";

export const indexRouter = express.Router()

indexRouter.use(userRouter)