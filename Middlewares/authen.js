const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { User, Role } = require('../models');
const { Model } = require('sequelize');



const auth = async (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ success: false, error: "Access denied. No token provided." });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findByPk(decoded.id);
        req.user = user;
        next();
    } catch (err) {
        res.status(400).json({ success: false, error: "Invalid token." });
    }
};

module.exports = auth;