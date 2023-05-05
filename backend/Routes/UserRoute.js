import express from 'express'
import { Allusers, LoginController, SignupController, getController } from '../Controller/UserController.js'
import { protect } from '../MiddelWare/authMideelware.js';

//router object 
const router = express.Router()

router.post('/register' , SignupController)
// router.post('/login' ,    loginControllers )
router.post("/login", LoginController);
router.get("/getData", getController);

router.get("/get" ,protect, Allusers )

export default router ;
