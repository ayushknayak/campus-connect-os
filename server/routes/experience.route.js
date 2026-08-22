import express from 'express';
import {createExperience,updateExperience,getExperiencesByOpportunity,deleteExperience} from '../controller/experience.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router=express.Router();

router.post('/',authMiddleware,createExperience);
router.get('/opportunities/:opportunityId',getExperiencesByOpportunity);
router.patch('/:id',authMiddleware,updateExperience);
router.delete('/:id',authMiddleware,deleteExperience);


export default router;