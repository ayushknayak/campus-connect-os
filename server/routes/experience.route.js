import express from 'express';
import {createExperience,updateExperience,getExperiencesByOpportunity,deleteExperience} from '../controller/experience.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { experienceValidator } from '../validators/experience.validator.js';
import validate from '../middleware/validate.js';

const router=express.Router();

router.post('/',authMiddleware,experienceValidator,validate,createExperience);
router.get('/opportunities/:opportunityId',getExperiencesByOpportunity);
router.patch('/:id',authMiddleware,updateExperience);
router.delete('/:id',authMiddleware,deleteExperience);


export default router;