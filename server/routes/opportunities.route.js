import express from 'express'
import {addopportunity,getOpportunities,getOpportunityById,updateOpportunity,deleteOpportunity} from '../controller/opportunity.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router=express.Router();

router.post('/',authMiddleware,addopportunity);
router.get('/',getOpportunities);
router.get('/:id',getOpportunityById);
router.patch('/:id',authMiddleware,updateOpportunity);
router.delete('/:id',authMiddleware,deleteOpportunity);


export default router;