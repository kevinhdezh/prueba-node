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
exports.deleteCatLugares = exports.putCatLugar = exports.postCatLugar = exports.getCatLugar = exports.getCatLugares = void 0;
const catLugares_1 = __importDefault(require("../models/catLugares"));
const getCatLugares = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const catLugares = yield catLugares_1.default.findAll();
    res.json(catLugares);
});
exports.getCatLugares = getCatLugares;
const getCatLugar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const catLugares = yield catLugares_1.default.findByPk(id);
    if (catLugares) {
        res.json(catLugares);
    }
    else {
        res.status(404).json({
            msg: `No hay lugar con id ${id}`
        });
    }
});
exports.getCatLugar = getCatLugar;
const postCatLugar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeId = yield catLugares_1.default.findOne({
            where: {
                id_lugar: body.id_lugar
            }
        });
        if (existeId) {
            return res.status(400).json({
                msg: 'Ya existe un lugar con el id ' + body.id_lugar
            });
        }
        const catLugares = new catLugares_1.default(body);
        yield catLugares.save();
        res.json(catLugares);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.postCatLugar = postCatLugar;
const putCatLugar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const catLugares = yield catLugares_1.default.findByPk(id);
        if (!catLugares) {
            return res.status(404).json({
                msg: 'No existe un lugar con el id ' + id
            });
        }
        yield catLugares.update(body);
        res.json(catLugares);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.putCatLugar = putCatLugar;
const deleteCatLugares = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const catLugares = yield catLugares_1.default.findByPk(id);
    if (!catLugares) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield catLugares.destroy();
    res.json(catLugares);
});
exports.deleteCatLugares = deleteCatLugares;
//# sourceMappingURL=catLugares.js.map