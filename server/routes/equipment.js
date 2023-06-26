import express from 'express';
const router = express.Router();

import {getAllEquipmentStatic,
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
} from '../controllers/equipment.js';

router.route('/static').get(getAllEquipmentStatic);
router.route('/').get(getAllEquipment, searchEquipment).post(createEquipment);
router.route('/:id').get(getEquipment).delete(deleteEquipment).patch(updateEquipment, modifyMaintenanceRequest);
router.route('/:id/maintenance').post(performMaintenance);
router.route('/:id/transfer').post(transferEquipment);
router.route('/:id/Available').post(markEquipmentAsAvailable);
router.route('/:id/status').patch(updateEquipmentStatus);

export default router;