import { Router } from 'express';
import * as CocapiController from '../controllers/cocapi.controller';
const router = new Router();

// Get Top Clans
router.route('/top-clans').get(CocapiController.getTopClansFromAPI);

// Get clan detail
router.route('/clan-detail').get(CocapiController.getClanByTag);

export default router;
