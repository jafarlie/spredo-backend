import express from "express";
// import { getUserProfile } from "./getUserProfile";
// import { getHashtagAnalytics } from "./getHashtagAnalytics";
import { postWebsiteEmailSubmission } from './contact/index';

const router = express.Router();

// Using routes
router.post("/contact", postWebsiteEmailSubmission);
// router.post("/hashtags", getHashtagAnalytics);

export default router;
