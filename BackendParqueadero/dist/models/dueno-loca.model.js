"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuenoLoca = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const local_model_1 = require("./local.model");
const solicitud_presencial_model_1 = require("./solicitud-presencial.model");
const vehiculo_model_1 = require("./vehiculo.model");
let DuenoLoca = class DuenoLoca extends repository_1.Entity {
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
], DuenoLoca.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DuenoLoca.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DuenoLoca.prototype, "identificacion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DuenoLoca.prototype, "telefono", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => local_model_1.Local),
    (0, tslib_1.__metadata)("design:type", Array)
], DuenoLoca.prototype, "locals", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => solicitud_presencial_model_1.SolicitudPresencial),
    (0, tslib_1.__metadata)("design:type", solicitud_presencial_model_1.SolicitudPresencial)
], DuenoLoca.prototype, "solicitudPresencial", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => vehiculo_model_1.Vehiculo),
    (0, tslib_1.__metadata)("design:type", vehiculo_model_1.Vehiculo)
], DuenoLoca.prototype, "vehiculo", void 0);
DuenoLoca = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DuenoLoca);
exports.DuenoLoca = DuenoLoca;
//# sourceMappingURL=dueno-loca.model.js.map