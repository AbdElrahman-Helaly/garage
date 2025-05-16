const Mechanic = require('../models/Mechanic');
const { route } = require('../routes/userRoutes');


exports.Getall = async (req, res) => {
    try {
        const Mechanic = await Mechanic.findAll();
        res.json(Mechanic);
    }
    catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

exports.CreateMechanic = async (req, res) => {
    try {
        const Mechanic = await Mechanic.create(req.body);
        res.status(201).json(Mechanic);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.GetMechanicbyid = async (req, res) => {
    try {
        const Mechanic = await Mechanic.findByPk(req.param.id);
        if (!Mechanic) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.json({ success: true, data: Mechanic });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}

exports.DeleteMechanic = async (req, res) => {
    try {
        const Mechanic = await Mechanic.findByPk(req.param.id);
        if (!Mechanic) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        await Mechanic.destroy();
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}

exports.UpdateMechanic = async (req, res) => {
    try {
        const Mechanic = await Mechanic.findByPk(req.param.id);
        if (!Mechanic) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        const updatedCar = await Mechanic.update(req.body);
        res.json({ success: true, data: updatedCar });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}

