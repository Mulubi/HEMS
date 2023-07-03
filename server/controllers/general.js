import User from '../models/user.js';
import asyncWrapper from '../middleware/async.js';
import MaintenanceRequest from '../models/request.js';

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

export const createUser = asyncWrapper(async (req, res) => {
        const user = await User.create(req.body);
        res.status(201).json({ user });
});