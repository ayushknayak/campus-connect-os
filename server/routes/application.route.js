import express from 'express';
import {Addapplication,getApplications,updateApplication} from '../controller/application.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router=express.Router();

router.post('/',authMiddleware,Addapplication);
router.get('/',authMiddleware,getApplications);
router.patch('/:id',authMiddleware,updateApplication);

export default router;

