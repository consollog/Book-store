import expree from 'express';
import { singup, login } from '../contoller/user.controller.js';
const router = expree.Router();

router.post("/singup", singup);
router.post("/login", login)

export default router;