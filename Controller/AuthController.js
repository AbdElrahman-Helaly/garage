const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET;


exports.Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    const hashedPassword = bcrypt.hashSync(password, 10);
    res.status(201).json({ success: true, user });

  }
  catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ success: false, error: "Invalid email/password" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ success: true, token });
  }
  catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};