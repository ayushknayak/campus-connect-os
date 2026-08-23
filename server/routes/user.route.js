import express from 'express';
import {getProfile,updateProfile,getPublicProfile} from '../controller/user.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
const router=express.Router();

router.get('/profile',authMiddleware,getProfile);
router.patch('/profile',authMiddleware,updateProfile);
router.get("/public/:username",getPublicProfile);

export default router;

