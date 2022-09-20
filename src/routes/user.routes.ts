import { Router } from "express";
import {createUser, deleteUser, getUsers, updateUser, getUser} from "../controllers/user.controll";
const router= Router();
router.post('/users', createUser);

router.get('/users', getUsers);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.get('/users/:id', getUser);

export default router;