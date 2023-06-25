const express = require('express');
const router = express.Router();

const {getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
} = require('../controllers/technician');
router.route('/').get(getAllTechnicians).post(createTechnician);
router.route('/:id').get(getTechnicianById).delete(deleteTechnician).patch(updateTechnician)

module.exports = router;
