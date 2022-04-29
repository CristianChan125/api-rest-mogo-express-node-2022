import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import {body} from 'express-validator'
import { validationResultExpress } from "../middlewares/validationResult.js";
const router = Router()

router.post('/register',[
    body('email','No email valido').trim().isEmail().normalizeEmail(),
    body('password',"Formato de password incorrecto").trim().isLength({min:6})
    .custom((value, {req})=>{
        if (value !== req.body.repassword) {
            throw new Error('No coinciden los password')
        }
        return value
    }),
],validationResultExpress,register)
router.post('/login',[
    body('email','No email valido').trim().isEmail().normalizeEmail(),
    body('password',"Formato de password incorrecto").trim().isLength({min:6})
],validationResultExpress,login)

export default router