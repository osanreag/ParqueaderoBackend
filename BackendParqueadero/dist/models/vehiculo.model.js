"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const dueno_loca_model_1 = require("./dueno-loca.model");
let Vehiculo = class Vehiculo extends repository_1.Entity {
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
], Vehiculo.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "placa", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "modelo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "color", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "estadovisual", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "numeroSoat", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "tipoVehiculo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "clienteId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => dueno_loca_model_1.DuenoLoca),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "duenoLocaId", void 0);
Vehiculo = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Vehiculo);
exports.Vehiculo = Vehiculo;
//# sourceMappingURL=vehiculo.model.js.map