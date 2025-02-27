import express from "express";
import {signup} from '../controllers/auth.controllers.js';
import {login} from '../controllers/auth.controllers.js';
import {signout} from '../controllers/auth.controllers.js';
import {authCheck} from '../controllers/auth.controllers.js';
import {protectRoute} from '../middleware/protectRoute.js';


const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", signout);

router.get("/authCheck", protectRoute, authCheck)

export default router;