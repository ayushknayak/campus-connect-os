import express from 'express';
import Addapplication from '../controller/application.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router=express.Router();

router.post('/',authMiddleware,Addapplication);


export default router;

