import express from 'express'
import {signup,login} from '../controller/auth.controller.js'
import { loginValidator, signupValidator } from '../validators/auth.validator.js';
import validate from '../middleware/validate.js';

const router=express.Router();

router.post('/signup',signupValidator,validate,signup);
router.post('/login',loginValidator,validate,login);

export default router;
