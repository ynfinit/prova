import Maintenance from '../models/Maintenance.js';


export const store = async (req, res) => {
    try {
        const maintenance = await Maintenance.create(req.body);
        return res.status(201).json(maintenance);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const maintenances = await Maintenance.find().exec();
        return res.status(200).json(maintenances);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(maintenance);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(maintenance);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};