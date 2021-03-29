"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catEstatus_1 = require("../controllers/catEstatus");
const router = express_1.Router();
router.get('/', catEstatus_1.getCatEstatus);
router.get('/:id', catEstatus_1.getCatEstatu);
router.post('/', catEstatus_1.postCatEstatus);
router.put('/:id', catEstatus_1.putCatEstatus);
router.delete('/:id', catEstatus_1.deleteCatEstatus);
exports.default = router;
//# sourceMappingURL=catEstatus.js.map