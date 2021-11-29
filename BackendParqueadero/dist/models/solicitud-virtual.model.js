"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudVirtual = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const lugar_parqueadero_model_1 = require("./lugar-parqueadero.model");
const recibo_model_1 = require("./recibo.model");
let SolicitudVirtual = class SolicitudVirtual extends repository_1.Entity {
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
], SolicitudVirtual.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudVirtual.prototype, "placa", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudVirtual.prototype, "fechaVisita", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudVirtual.prototype, "identificacion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudVirtual.prototype, "lugarparqueadero", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudVirtual.prototype, "clienteId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => lugar_parqueadero_model_1.LugarParqueadero),
    (0, tslib_1.__metadata)("design:type", lugar_parqueadero_model_1.LugarParqueadero)
], SolicitudVirtual.prototype, "lugarParqueadero", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => recibo_model_1.Recibo),
    (0, tslib_1.__metadata)("design:type", String)
], SolicitudVirtual.prototype, "reciboId", void 0);
SolicitudVirtual = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], SolicitudVirtual);
exports.SolicitudVirtual = SolicitudVirtual;
//# sourceMappingURL=solicitud-virtual.model.js.map