const Technician = require('../models/technician');

// Get all technicians
const getAllTechnicians = async (req, res) => {
  try {
    const technicians = await Technician.find({});
    res.status(200).json({ technicians });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get technicians' });
  }
};

// Get a single technician by ID
const getTechnicianById = async (req, res) => {
  try {
    const { id } = req.params;
    const technician = await Technician.findById(id);
    
    if (!technician) {
      return res.status(404).json({ error: 'Technician not found' });
    }
    
    res.status(200).json({ technician });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get technician' });
  }
};

// Create a new technician
const createTechnician = async (req, res) => {
  try {
    const { firstName, lastName, specialization, phoneNumber } = req.body;

    const technician = new Technician({
      firstName,
      lastName,
      specialization,
      phoneNumber,
    });

    const savedTechnician = await technician.save();
    res.status(200).json({ technician: savedTechnician });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create technician' });
  }
};

// Update a technician
const updateTechnician = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, specialization, phoneNumber } = req.body;

    const technician = await Technician.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        specialization,
        phoneNumber,
      },
      { new: true }
    );

    if (!technician) {
      return res.status(404).json({ error: 'Technician not found' });
    }

    res.status(200).json({ technician });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update technician' });
  }
};

// Delete a technician
const deleteTechnician = async (req, res) => {
  try {
    const { id } = req.params;
    const technician = await Technician.findByIdAndDelete(id);

    if (!technician) {
      return res.status(404).json({ error: 'Technician not found' });
    }

    res.status(200).json({ technician });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete technician' });
  }
};

module.exports = {
    getAllTechnicians,
    getTechnicianById,
    createTechnician,
    updateTechnician,
    deleteTechnician,
};
