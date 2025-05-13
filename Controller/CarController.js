const Car = require('../models/Car');


exports.GetallCar = async (req, res) => {
    try {
        const Cars = await Car.findAll();
        res.json(Cars);
    }
    catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }

}

exports.CreateCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.GetCarbyid = async (req, res) => {
    try {
        const car = await Car.findByPk(req.param.id);
        if (!car) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.json({ success: true, data: car });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}

exports.DeleteCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.param.id);
        if (!car) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        await car.destroy();
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}

exports.UpdateCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.param.id);
        if (!car) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        const updatedCar = await Car.update(req.body);
        res.json({ success: true, data: updatedCar });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}




