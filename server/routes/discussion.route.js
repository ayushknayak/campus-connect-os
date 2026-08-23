import express from "express";
import { addDiscussion ,getDiscussions} from "../controller/discussion.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { discussionValidator } from "../validators/discussion.validator.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.post("/:opportunityId",authMiddleware,discussionValidator,validate,addDiscussion);
router.get("/:opportunityId",getDiscussions);

export default router;