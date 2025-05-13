const express = require('express');
const router = express.Router();

const CarController = require('../Controller/CarController');



router.get('/', CarController.GetallCar);
router.put('/:id', CarController.CreateCar);
router.get('/:id', CarController.GetCarbyid);
router.delete('/:id', CarController.DeleteCar);
router.put('/:id', CarController.UpdateCar);


module.exports = router;