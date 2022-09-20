"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controll_1 = require("../controllers/user.controll");
const router = (0, express_1.Router)();
router.post('/users', user_controll_1.createUser);
router.get('/users', user_controll_1.getUsers);
router.put('/users/:id', user_controll_1.updateUser);
router.delete('/users/:id', user_controll_1.deleteUser);
router.get('/users/:id', user_controll_1.getUser);
exports.default = router;
