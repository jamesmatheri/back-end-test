var express = require('express');
var router = express.Router();
const login_controller = require('../controllers/loginController');
const register_controller = require('../controllers/registerController');



router.post("/login",login_controller.user_authenticate_post )

router.post("/register",register_controller.user_create_post)



module.exports = router;