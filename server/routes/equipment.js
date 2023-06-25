const express = require('express');
const router = express.Router();

const {getAllEquipmentStatic,
    getAllEquipment,
    createEquipment,
    updateEquipment,
    deleteEquipment,
    getEquipment,
    searchEquipment,
    performMaintenance,
    transferEquipment,
    markEquipmentAsAvailable,
    updateEquipmentStatus,
    modifyMaintenanceRequest
} = require('../controllers/equipment');

router.route('/static').get(getAllEquipmentStatic);
router.route('/').get(getAllEquipment, searchEquipment).post(createEquipment);
router.route('/:id').get(getEquipment).delete(deleteEquipment).patch(updateEquipment, modifyMaintenanceRequest);
router.route('/:id/maintenance').post(performMaintenance);
router.route('/:id/transfer').post(transferEquipment);
router.route('/:id/Available').post(markEquipmentAsAvailable);
router.route('/:id/status').patch(updateEquipmentStatus);

module.exports = router;