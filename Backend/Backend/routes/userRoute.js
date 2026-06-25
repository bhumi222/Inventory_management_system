const express = require("express");
const {validation} = require('../middleware/userMiddleware.js')
const router = express.Router();
const {getUser, postUser, userLogin, deleteUser, putUser} = require("../controller/userController.js");
 

router.get('/',getUser);
router.post('/register',validation,postUser);
router.post('/login',userLogin)
router.delete('/:id',deleteUser);
router.put('/:id',putUser);

module.exports = router;

