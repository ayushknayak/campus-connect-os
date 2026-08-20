import express from 'express';
import {Addapplication,getApplications,updateApplication,deleteApplication,shareApplicationAsOpportunity} from '../controller/application.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router=express.Router();

router.post('/',authMiddleware,Addapplication);
router.get('/',authMiddleware,getApplications);
router.patch('/:id',authMiddleware,updateApplication);
router.delete('/:id',authMiddleware,deleteApplication);
router.post("/:id/share",authMiddleware,shareApplicationAsOpportunity);

export default router;

