const express = require('express');
const router = express.Router();

const {getAllMaintenanceActivities,
    createMaintenanceActivity,
    updateMaintenanceActivity,
    deleteMaintenanceActivity,
    getMaintenanceActivity,
    requestEquipmentMaintenance,
    removeMaintenanceRequest
} = require('../controllers/maintenance');
router.route('/').get(getAllMaintenanceActivities).post(createMaintenanceActivity);
router.route('/:id').get(getMaintenanceActivity).delete(deleteMaintenanceActivity, removeMaintenanceRequest).patch(updateMaintenanceActivity)
router.route('/:id/request').post(requestEquipmentMaintenance);
module.exports = router;