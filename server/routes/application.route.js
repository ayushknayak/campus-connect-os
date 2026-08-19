import express from 'express';
import {Addapplication,getApplications} from '../controller/application.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router=express.Router();

router.post('/',authMiddleware,Addapplication);
router.get('/',authMiddleware,getApplications);

export default router;

