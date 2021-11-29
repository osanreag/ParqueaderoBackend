"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const dueno_loca_model_1 = require("./dueno-loca.model");
let Local = class Local extends repository_1.Entity {
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
], Local.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Local.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Local.prototype, "referenciaComercial", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Local.prototype, "anoCreacion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Local.prototype, "ubicacion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => dueno_loca_model_1.DuenoLoca),
    (0, tslib_1.__metadata)("design:type", String)
], Local.prototype, "duenoLocaId", void 0);
Local = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Local);
exports.Local = Local;
//# sourceMappingURL=local.model.js.map