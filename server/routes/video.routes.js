/**
 * Created by Admin on 2/28/2017.
 */
import { Router } from 'express';
import * as VideoController from '../controllers/video.controller';
const router = new Router();

// Get Top Clans
router.route('/videos').get(VideoController.getVideosFromAPI);

// Get clan detail
router.route('/video-detail').get(VideoController.getVideoByID);

export default router;
