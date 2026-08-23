import express from 'express'
import {addOpportunity,getOpportunities,getOpportunityById,updateOpportunity,deleteOpportunity} from '../controller/opportunity.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { opportunityValidator } from '../validators/opportunity.validator.js';
import validate from '../middleware/validate.js';

const router=express.Router();

router.post('/',authMiddleware,opportunityValidator,validate,addOpportunity);
router.get('/',getOpportunities);
router.get('/:id',getOpportunityById);
router.patch('/:id',authMiddleware,updateOpportunity);
router.delete('/:id',authMiddleware,deleteOpportunity);


export default router;