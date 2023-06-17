const Equipment = require('../models/equipment');
const Maintenance = require('../models/maintenance');
const Transfer = require('../models/transfer');
const asyncWrapper = require('../middleware/async');

const getAllEquipment = asyncWrapper(async (req, res) => {
    const equipments = await Equipment.find(req.query);
    // res.status(200).json({ equipments });
    res.status(200).json({ equipments, amount:equipments.length });
    // res.status(200).json({ message: 'All equipment available', equipments });
    // res.status(200).json({ success:true, data:{equipments, nbHits: equipments.length } });
});

const createEquipment = asyncWrapper( async (req, res) => {
        const equipment = await Equipment.create(req.body, {
            runValidators: true,
        });
        res.status(200).json({ equipment });
});

const getEquipment = asyncWrapper( async (req, res) => {
        const {id:equipmentID} = req.params;
        const equipment = await Equipment.findOne({_id:equipmentID});
        res.status(200).json({ equipment });
        if (!equipment) {
            return res.status(404).json({msg: `No equipment with id: ${equipmentID}`})
        };
});

const updateEquipment = asyncWrapper( async (req, res) => {
        const { id:equipmentID } = req.params;
        
        const equipment = await Equipment.findOneAndUpdate({ _id: equipmentID}, req.body, {
            new: true,
            runValidators: true,
        });

    if (!equipment) {
            return res.status(404).json({msg: `No equipment with id: ${equipmentID}`})
        };
        res.status(200).json({ equipment });
});

const deleteEquipment = asyncWrapper( async (req, res) => {
    const { id:equipmentID } = req.params;
    const equipment = await Equipment.findOneAndDelete({ _id: equipmentID });

    if (!equipment) {
      return res.status(404).json({ msg: `No equipment with id: ${equipmentID}` });
    }

    res.status(200).json({ equipment });
});


const searchEquipment = asyncWrapper( async (req, res) => {
    const { query } = req.query;
    const regexQuery = new RegExp(query, 'i');
    
    const equipment = await Equipment.find({ $or: [{ name: regexQuery }, { description: regexQuery }] });

    if (equipment.length === 0) {
      return res.status(404).json({ msg: `No equipment matching the search query: ${query}` });
    }

    res.status(200).json({ equipment });
    res.status(500).json({ error: 'Failed to search equipment' });
});

const performMaintenance = asyncWrapper( async (req, res) => {
    const { id: equipmentID } = req.params;
    
    const equipment = await Equipment.findById(equipmentID);

    if (!equipment) {
      return res.status(404).json({ msg: `No equipment with id: ${equipmentID}` });
    }

    // Perform the maintenance operation on the equipment
    // ...

    // Update the maintenance status or any relevant fields
    equipment.maintenanceStatus = 'Maintenance Complete';
    await equipment.save();

    res.status(200).json({ equipment });
    res.status(500).json({ error: 'Failed to perform maintenance' });
});



const transferEquipment = asyncWrapper( async (req, res) => {
    const { id } = req.params;
    const { targetLocation } = req.body;

    // Check if the equipment exists
    const equipment = await Equipment.findById(id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }

    // Update the equipment's location
    equipment.location = targetLocation;

    // Save the updated equipment
    const updatedEquipment = await equipment.save();

    res.json({ equipment: updatedEquipment });
    // res.status(500).json({ error: 'Failed to transfer equipment' });
});


const markEquipmentAsAvailable = asyncWrapper( async (req, res) => {
    const { id } = req.params;

    // Check if the equipment exists
    const equipment = await Equipment.findById(id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }

    // Update the equipment status to available
    equipment.status = 'Available';

    // Save the updated equipment
    const updatedEquipment = await equipment.save();

    res.json({ equipment: updatedEquipment });
    res.status(500).json({ error: 'Failed to mark equipment as available' });
});


const updateEquipmentStatus = asyncWrapper( async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // Check if the equipment exists
    const equipment = await Equipment.findById(id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }

    // Update the equipment status
    equipment.status = status;

    // Save the updated equipment
    const updatedEquipment = await equipment.save();

    res.json({ equipment: updatedEquipment });
    res.status(500).json({ error: 'Failed to update equipment status' });
});


const modifyMaintenanceRequest = asyncWrapper( async (req, res) => {
    const { requestId } = req.params;
    const { description, priority, assignedTechnician, status } = req.body;

    // Check if the maintenance request exists
    const maintenanceRequest = await MaintenanceRequest.findById(requestId);
    if (!maintenanceRequest) {
      return res.status(404).json({ error: 'Maintenance request not found' });
    }

    // Update the maintenance request properties
    if (description) {
      maintenanceRequest.description = description;
    }
    if (priority) {
      maintenanceRequest.priority = priority;
    }
    if (assignedTechnician) {
      maintenanceRequest.assignedTechnician = assignedTechnician;
    }
    if (status) {
      maintenanceRequest.status = status;
    }

    // Save the updated maintenance request
    const updatedRequest = await maintenanceRequest.save();

    res.json({ maintenanceRequest: updatedRequest });
    res.status(500).json({ error: 'Failed to modify maintenance request' });
});






module.exports = {
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
};