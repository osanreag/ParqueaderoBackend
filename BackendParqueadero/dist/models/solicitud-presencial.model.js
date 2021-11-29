"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudPresencial = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const dueno_loca_model_1 = require("./dueno-loca.model");
const lugar_parqueadero_model_1 = require("./lugar-parqueadero.model");
const recibo_model_1 = require("./recibo.model");
let SolicitudPresencial = class SolicitudPresencial extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudPresencial.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudPresencial.prototype, "fechaVisita", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudPresencial.prototype, "identificacion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => dueno_loca_model_1.DuenoLoca),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudPresencial.prototype, "duenoLocaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => lugar_parqueadero_model_1.LugarParqueadero),
    (0, tslib_1.__metadata)("design:type", lugar_parqueadero_model_1.LugarParqueadero)
], SolicitudPresencial.prototype, "lugarParqueadero", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => recibo_model_1.Recibo),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudPresencial.prototype, "reciboId", void 0);
SolicitudPresencial = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], SolicitudPresencial);
exports.SolicitudPresencial = SolicitudPresencial;
//# sourceMappingURL=solicitud-presencial.model.js.map