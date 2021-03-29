"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCatTramite = exports.putCatTramite = exports.postCatTramite = exports.getTramite = exports.getTramites = void 0;
const catTramites_1 = __importDefault(require("../models/catTramites"));
const getTramites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const catTramites = yield catTramites_1.default.findAll();
    res.json(catTramites);
});
exports.getTramites = getTramites;
const getTramite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const catTramite = yield catTramites_1.default.findByPk(id);
    if (catTramite) {
        res.json(catTramite);
    }
    else {
        res.status(404).json({
            msg: `No hay usuario con id ${id}`
        });
    }
});
exports.getTramite = getTramite;
const postCatTramite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeId = yield catTramites_1.default.findOne({
            where: {
                id_tramite: body.id_tramite
            }
        });
        if (existeId) {
            return res.status(400).json({
                msg: 'Ya existe un tramite con el id ' + body.id_tramite
            });
        }
        const catTramite = new catTramites_1.default(body);
        yield catTramite.save();
        res.json(catTramite);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.postCatTramite = postCatTramite;
const putCatTramite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const catTramite = yield catTramites_1.default.findByPk(id);
        if (!catTramite) {
            return res.status(404).json({
                msg: 'No existe un tramite con el id ' + id
            });
        }
        yield catTramite.update(body);
        res.json(catTramite);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.putCatTramite = putCatTramite;
const deleteCatTramite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const catTramite = yield catTramites_1.default.findByPk(id);
    if (!catTramite) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield catTramite.destroy();
    res.json(catTramite);
});
exports.deleteCatTramite = deleteCatTramite;
//# sourceMappingURL=catTramites.js.map