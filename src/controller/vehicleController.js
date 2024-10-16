import Vehicle from '../models/Vehicle.js';


export const store = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        return res.status(201).json(vehicle);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const vehicles = await Vehicle.find().exec();
        return res.status(200).json(vehicles);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};