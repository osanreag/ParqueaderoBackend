"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudVirtualReciboController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudVirtualReciboController = class SolicitudVirtualReciboController {
    constructor(solicitudVirtualRepository) {
        this.solicitudVirtualRepository = solicitudVirtualRepository;
    }
    async getRecibo(id) {
        return this.solicitudVirtualRepository.recibo(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-virtuals/{id}/recibo', {
        responses: {
            '200': {
                description: 'Recibo belonging to SolicitudVirtual',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Recibo) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualReciboController.prototype, "getRecibo", null);
SolicitudVirtualReciboController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudVirtualRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudVirtualRepository])
], SolicitudVirtualReciboController);
exports.SolicitudVirtualReciboController = SolicitudVirtualReciboController;
//# sourceMappingURL=solicitud-virtual-recibo.controller.js.map