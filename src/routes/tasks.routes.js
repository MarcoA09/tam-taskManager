import { Router } from "express";
import {authRequired} from '../middlewares/validateToken.js';
import { getTasks, createTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/dashboard')
router.post('/dashboard', authRequired, createTask)
router.get("/dashboard", authRequired, getTasks);


export default router;