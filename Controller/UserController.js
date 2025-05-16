const User = require('../models/user');

exports.GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.CreateUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.GetbyId = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.json({ success: true, data: user });
    }
    catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.DeleteUser = async (req, res) => {
    const loggedInUser = req.user;
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        if (loggedInUser.role !== 'admin' && loggedInUser.id !== targetUserId) {
            return res.status(403).json({ error: "Not authorized to delete this user" });
        }
        await user.destroy();
        res.json({ success: true, message: "User deleted successfully" });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
};

exports.UpdateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        await user.update(req.body);
        res.json({ success: true, data: user });
    }
    catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
};
