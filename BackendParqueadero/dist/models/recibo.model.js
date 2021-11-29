"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recibo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Recibo = class Recibo extends repository_1.Entity {
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
], Recibo.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Recibo.prototype, "fechaSalida", void 0);
Recibo = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Recibo);
exports.Recibo = Recibo;
//# sourceMappingURL=recibo.model.js.map