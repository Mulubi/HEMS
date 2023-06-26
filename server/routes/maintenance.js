import express from 'express';
const router = express.Router();

import {getAllMaintenanceActivities,
    createMaintenanceActivity,
    updateMaintenanceActivity,
    deleteMaintenanceActivity,
    getMaintenanceActivity,
    requestEquipmentMaintenance,
    removeMaintenanceRequest
} from '../controllers/maintenance.js';
router.route('/').get(getAllMaintenanceActivities).post(createMaintenanceActivity);
router.route('/:id').get(getMaintenanceActivity).delete(deleteMaintenanceActivity, removeMaintenanceRequest).patch(updateMaintenanceActivity)
router.route('/:id/request').post(requestEquipmentMaintenance);


export default router;