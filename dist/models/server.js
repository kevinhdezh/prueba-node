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
const express_1 = __importDefault(require("express"));
const cliente_1 = __importDefault(require("../routes/cliente"));
const cita_1 = __importDefault(require("../routes/cita"));
const catTramite_1 = __importDefault(require("../routes/catTramite"));
const catEstatus_1 = __importDefault(require("../routes/catEstatus"));
const catLugares_1 = __importDefault(require("../routes/catLugares"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            clientes: '/api/clientes',
            cita: '/api/citas',
            catTramites: '/api/catTramites',
            catEstatus: '/api/catEstatus',
            catLugares: '/api/catLugares'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        //conectar db
        this.dbConnection();
        //middlewares
        this.middlewares();
        //definir rutas
        this.routes();
    }
    //bd
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database on');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //cors
        this.app.use(cors_1.default());
        //lectura body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.clientes, cliente_1.default),
            this.app.use(this.apiPaths.cita, cita_1.default),
            this.app.use(this.apiPaths.catTramites, catTramite_1.default),
            this.app.use(this.apiPaths.catEstatus, catEstatus_1.default),
            this.app.use(this.apiPaths.catLugares, catLugares_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map