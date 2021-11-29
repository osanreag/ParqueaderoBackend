"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LugarParqueadero = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let LugarParqueadero = class LugarParqueadero extends repository_1.Entity {
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
], LugarParqueadero.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LugarParqueadero.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LugarParqueadero.prototype, "numeroLugar", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LugarParqueadero.prototype, "tipoEspacio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LugarParqueadero.prototype, "solicitudPresencialId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LugarParqueadero.prototype, "solicitudVirtualId", void 0);
LugarParqueadero = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], LugarParqueadero);
exports.LugarParqueadero = LugarParqueadero;
//# sourceMappingURL=lugar-parqueadero.model.js.map