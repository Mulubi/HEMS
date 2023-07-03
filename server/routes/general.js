import express from 'express';
const router = express.Router();

import { getUser, createUser } from '../controllers/general.js';


// router.get('/user/:id', getUser);
// router.post('/', createUser);
router.route('/').get(getUser).post(createUser);

export default router;
