"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const router = express_1.Router();
router.get(
/* Nombre de ruta -->*/ '/', [ /* Array de middlewares*/], 
/* Controller -->*/ controller_1.getRoot);
exports.default = router;
