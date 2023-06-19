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

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
  
>>>>>>> 78ad586b9eb84024da4af6560f827f697a8a8907
