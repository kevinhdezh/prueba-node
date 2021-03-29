"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catLugares_1 = require("../controllers/catLugares");
const router = express_1.Router();
router.get('/', catLugares_1.getCatLugares);
router.get('/:id', catLugares_1.getCatLugar);
router.post('/', catLugares_1.postCatLugar);
router.put('/:id', catLugares_1.putCatLugar);
router.delete('/:id', catLugares_1.deleteCatLugares);
exports.default = router;
//# sourceMappingURL=catLugares.js.map