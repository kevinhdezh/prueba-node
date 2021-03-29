"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_1 = require("../controllers/clientes");
const router = express_1.Router();
router.get('/', clientes_1.getClientes);
router.get('/:id', clientes_1.getCliente);
router.post('/', clientes_1.postCliente);
router.put('/:id', clientes_1.putCliente);
router.delete('/:id', clientes_1.deleteCliente);
exports.default = router;
//# sourceMappingURL=cliente.js.map