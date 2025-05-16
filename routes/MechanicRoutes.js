const express = require('express');
const router = express.Router();

const MechanicController = require('../Controller/MechanicController');


router.get('/', MechanicController.Getall);
router.put('/:id', MechanicController.CreateMechanic);
router.get('/:id', MechanicController.GetMechanicbyid);
router.delete('/:id', MechanicController.DeleteMechanic);
router.put('/:id', MechanicController.UpdateMechanic);



module.exports = router;

