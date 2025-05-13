const express = require('express');
const router = express.Router();

const userController = require('../Controller/UserController.js');
const auth = require('../Middlewares/auth');


router.get('/', userController.GetAllUsers);
router.post('/', userController.CreateUser);
router.get('/:id', userController.GetbyId);


router.delete('/:id', auth, userController.DeleteUser);
router.put('/:id', auth, userController.UpdateUser);



module.exports = router;