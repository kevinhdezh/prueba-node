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
exports.deleteCatEstatus = exports.putCatEstatus = exports.postCatEstatus = exports.getCatEstatu = exports.getCatEstatus = void 0;
const catEstatus_1 = __importDefault(require("../models/catEstatus"));
const getCatEstatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const catEstaus = yield catEstatus_1.default.findAll();
    res.json(catEstaus);
});
exports.getCatEstatus = getCatEstatus;
const getCatEstatu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const catEstatus = yield catEstatus_1.default.findByPk(id);
    if (catEstatus) {
        res.json(catEstatus);
    }
    else {
        res.status(404).json({
            msg: `No hay estatus con id ${id}`
        });
    }
});
exports.getCatEstatu = getCatEstatu;
const postCatEstatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeId = yield catEstatus_1.default.findOne({
            where: {
                id_estatus: body.id_estatus
            }
        });
        if (existeId) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el id ' + body.id_estatus
            });
        }
        const catEstatus = new catEstatus_1.default(body);
        yield catEstatus.save();
        res.json(catEstatus);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.postCatEstatus = postCatEstatus;
const putCatEstatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const catEstatus = yield catEstatus_1.default.findByPk(id);
        if (!catEstatus) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        yield catEstatus.update(body);
        res.json(catEstatus);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.putCatEstatus = putCatEstatus;
const deleteCatEstatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const catEstatus = yield catEstatus_1.default.findByPk(id);
    if (!catEstatus) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield catEstatus.destroy();
    res.json(catEstatus);
});
exports.deleteCatEstatus = deleteCatEstatus;
//# sourceMappingURL=catEstatus.js.map