import express from 'express';
import { recordEconomy, getEconomy } from '../controllers/economyController.js';

const router = express.Router();

router.post('/', recordEconomy);

router.get('/:userId', getEconomy);

export default router;
