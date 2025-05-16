const express = require('express');
const router = express.Router();

const userController = require('../Controller/UserController.js');

const auth = require('../Middlewares/authen');
const autherization = require('../Middlewares/authorization.js');


router.get('/', userController.GetAllUsers);
router.post('/', auth, autherization(['admin']), userController.CreateUser);
router.get('/:id', userController.GetbyId);

router.delete('/:id', auth, autherization(['admin']), userController.DeleteUser);
router.put('/:id', auth, autherization(['admin']), userController.UpdateUser);



module.exports = router;
