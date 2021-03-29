"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catTramites_1 = require("../controllers/catTramites");
const router = express_1.Router();
router.get('/', catTramites_1.getTramites);
router.get('/:id', catTramites_1.getTramite);
router.post('/', catTramites_1.postCatTramite);
router.put('/:id', catTramites_1.putCatTramite);
router.delete('/:id', catTramites_1.deleteCatTramite);
exports.default = router;
//# sourceMappingURL=catTramite.js.map