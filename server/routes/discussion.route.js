import express from "express";
import { addDiscussion ,getDiscussions} from "../controller/discussion.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/:opportunityId",authMiddleware,addDiscussion);
router.get("/:opportunityId",getDiscussions);

export default router;