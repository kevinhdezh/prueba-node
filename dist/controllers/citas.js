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
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
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
    console.log(body);
    let cita = {
        id_cita: 0,
        id_cliente: body.id_cliente,
        folio: body.folio,
        fecha_registro: body.fecha_registro,
        fecha_cita: body.fecha_cita,
        hora_cita: body.hora_cita,
        id_estatus: body.id_estatus,
        id_lugar: body.id_lugar,
        id_tramite: body.id_tramite
    };
    const id = yield cita_1.default.max('id_cita').then(max => {
        return max;
    });
    cita.id_cita = id + 1;
    console.log(cita);
    try {
        const existeId = yield cita_1.default.findAll({
            where: {
                fecha_cita: {
                    [sequelize_1.Op.gte]: moment_1.default().toDate()
                }
            }
        });
        console.log(existeId);
        if (existeId.length > 0) {
            console.log('ok');
            for (let index = 0; index < existeId.length; index++) {
                const element = existeId[index];
                console.log('******element', element.hora_cita);
                var horaInicio = moment_1.default(element.hora_cita, "HH:mm:ss");
                var duration = moment_1.default.duration({ 'hours': 1 });
                //var horaFin = horaInicio.add(moment.duration("01:00:00"));
                var horaFin = moment_1.default(element.hora_cita, "HH:mm:ss").add(1, 'hour');
                var horaBody = moment_1.default(cita.hora_cita, "HH:mm:ss");
                console.log('*******inicio', horaInicio, '---', element.hora_cita);
                console.log('*******fin', horaFin);
                console.log('********body', horaBody);
                if (horaBody.isBetween(horaInicio, horaFin, null, '[]')) {
                    console.log('listo', horaFin);
                    return res.status(400).json({
                        msg: 'Hora ocupada '
                    });
                }
                else {
                    const citas = new cita_1.default(cita);
                    yield citas.save();
                    res.json(citas);
                }
                //console.log('***********',element)
            }
        }
        else {
            console.log('***********');
            const citas = new cita_1.default(cita);
            yield citas.save();
            res.json(citas);
        }
        // if(existeId){
        //     return res.status(400).json({
        //         msg: 'hay citas para esta fecha ' + body.fecha_cita
        //     });
        // }else{
        //     const citas = new Cita(cita);
        //     await citas.save();
        //     res.json(citas);
        // }
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