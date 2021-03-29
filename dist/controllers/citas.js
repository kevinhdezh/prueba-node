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
exports.deleteCita = exports.putCita = exports.postCita = exports.getCita = exports.getCitas = void 0;
const cita_1 = __importDefault(require("../models/cita"));
const getCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const citas = yield cita_1.default.findAll();
    res.json(citas);
});
exports.getCitas = getCitas;
const getCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const citas = yield cita_1.default.findByPk(id);
    if (citas) {
        res.json(citas);
    }
    else {
        res.status(404).json({
            msg: `No hay cita con id ${id}`
        });
    }
});
exports.getCita = getCita;
const postCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeId = yield cita_1.default.findOne({
            where: {
                id_cita: body.id_cita
            }
        });
        if (existeId) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el id ' + body.id_cita
            });
        }
        const citas = new cita_1.default(body);
        yield citas.save();
        res.json(citas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.postCita = postCita;
const putCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const citas = yield cita_1.default.findByPk(id);
        if (!citas) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        yield citas.update(body);
        res.json(citas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
});
exports.putCita = putCita;
const deleteCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const citas = yield cita_1.default.findByPk(id);
    if (!citas) {
        return res.status(404).json({
            msg: 'No existe un cita con el id ' + id
        });
    }
    yield citas.destroy();
    res.json(citas);
});
exports.deleteCita = deleteCita;
//# sourceMappingURL=citas.js.map