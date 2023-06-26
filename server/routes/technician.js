import express from 'express';
const router = express.Router();

import {getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
} from '../controllers/technician.js';
router.route('/').get(getAllTechnicians).post(createTechnician);
router.route('/:id').get(getTechnicianById).delete(deleteTechnician).patch(updateTechnician)

export default router;
