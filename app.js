const express = require('express');
const test = require('./config/dbconnectiontest');
const userRoutes = require('./routes/userRoutes');
const CarRoutes = require('./routes/CarRoutes');
const authRoutes = require('./routes/AuthRoutes');
const MechanicRoutes = require('./routes/AuthRoutes');


require('dotenv').config();



const PORT = 3000;
//to test if db connected or no..
test();

const app = express();

app.use(express.json());


app.use('/user', userRoutes);
app.use('/car', CarRoutes);
app.use('/auth', authRoutes);
app.use('/mechanic', MechanicRoutes);




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



