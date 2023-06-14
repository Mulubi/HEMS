const MaintenanceActivities = require('../models/maintenance');
const MaintenanceRequest = require('../models/request');
const asyncWrapper = require('../middleware/async');


const getAllMaintenanceActivities = asyncWrapper(async (req, res) => {
    const maintenanceActivities = await MaintenanceActivities.find({});
    res.status(200).json({ msg: 'These are the maintenance activities', maintenanceActivities });
    // res.send('All Maintenance activities planned are here')
});

const createMaintenanceActivity = asyncWrapper( async (req, res) => {
    const maintenanceActivity = await MaintenanceActivities.create(req.body, {
        runValidators: true,
    });
    res.status(200).json({ maintenanceActivity });
});


const getMaintenanceActivity = asyncWrapper( async (req, res) => {
    const {id:maintenanceID} = req.params;
    const maintenanceActivity = await MaintenanceActivities.findOne({_id:maintenanceID});
    res.status(200).json({ maintenanceActivity });
    if (!maintenanceActivity) {
        return res.status(404).json({msg: `No such activity with id: ${maintenanceID}`})
    };
});

const updateMaintenanceActivity = asyncWrapper( async (req, res) => {
    const { id:maintenanceID } = req.params;
    
    const maintenanceActivity = await MaintenanceActivities.findOneAndUpdate({ _id: maintenanceID}, req.body, {
        new: true,
        runValidators: true,
    });

if (!maintenanceActivity) {
        return res.status(404).json({msg: `No Activity with id: ${maintenanceID}`})
    };
    res.status(200).json({ maintenanceActivity });
});

const deleteMaintenanceActivity = asyncWrapper( async (req, res) => {
    const { id:maintenanceID } = req.params;
    const maintenanceActivity = await MaintenanceActivities.findOneAndDelete({ _id: maintenanceID });

    if (!maintenanceActivity) {
      return res.status(404).json({ msg: `No activity with id: ${maintenanceID}` });
    }

    res.status(200).json({ maintenanceActivity });
});



const requestEquipmentMaintenance = asyncWrapper( async (req, res) => {
    const { id } = req.params;
    const { description, priority } = req.body;

    // Create a new maintenance request
    const maintenanceRequest = new MaintenanceRequest({
      description,
      priority,
    });

    // Save the maintenance request to the database
    const savedRequest = await maintenanceRequest.save();

    res.status(201).json({ maintenanceRequest: savedRequest });
    res.status(500).json({ error: 'Failed to request equipment maintenance' });
});


// const modifyMaintenanceRequest = asyncWrapper( async (req, res) => {
//     const { Id, requestId } = req.params;
//     const { description, priority} = req.body;

//     // Check if the maintenance request exists
//     const maintenanceRequest = await MaintenanceRequest.findById(requestId);
//     if (!maintenanceRequest) {
//       return res.status(404).json({ error: 'Maintenance request not found' });
//     }

//     // Update the maintenance request properties
//     if (description) {
//       maintenanceRequest.description = description;
//     }
//     if (priority) {
//       maintenanceRequest.priority = priority;
//     }

//     // Save the updated maintenance request
//     const updatedRequest = await maintenanceRequest.save();

//     res.json({ maintenanceRequest: updatedRequest });
//     res.status(500).json({ error: 'Failed to modify maintenance request' });
// });



const removeMaintenanceRequest = asyncWrapper( async (req, res) => {
    const { requestId } = req.params;

    // Check if the maintenance request exists
    const maintenanceRequest = await MaintenanceRequest.findById(requestId);
    if (!maintenanceRequest) {
      return res.status(404).json({ error: 'Maintenance request not found' });
    }

    // Delete the maintenance request from the database
    await MaintenanceRequest.findByIdAndDelete(requestId);

    res.json({ message: 'Maintenance request removed' });
    res.status(500).json({ error: 'Failed to remove maintenance request' });
});





module.exports = {
    getAllMaintenanceActivities,
    createMaintenanceActivity,
    updateMaintenanceActivity,
    deleteMaintenanceActivity,
    getMaintenanceActivity,
    requestEquipmentMaintenance,
    removeMaintenanceRequest
};