"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citas_1 = require("../controllers/citas");
const router = express_1.Router();
router.get('/', citas_1.getCitas);
router.get('/:id', citas_1.getCita);
router.post('/', citas_1.postCita);
router.put('/:id', citas_1.putCita);
router.delete('/:id', citas_1.deleteCita);
exports.default = router;
//# sourceMappingURL=cita.js.map