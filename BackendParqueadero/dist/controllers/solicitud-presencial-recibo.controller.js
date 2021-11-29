"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudPresencialReciboController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudPresencialReciboController = class SolicitudPresencialReciboController {
    constructor(solicitudPresencialRepository) {
        this.solicitudPresencialRepository = solicitudPresencialRepository;
    }
    async getRecibo(id) {
        return this.solicitudPresencialRepository.recibo(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-presencials/{id}/recibo', {
        responses: {
            '200': {
                description: 'Recibo belonging to SolicitudPresencial',
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
], SolicitudPresencialReciboController.prototype, "getRecibo", null);
SolicitudPresencialReciboController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudPresencialRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudPresencialRepository])
], SolicitudPresencialReciboController);
exports.SolicitudPresencialReciboController = SolicitudPresencialReciboController;
//# sourceMappingURL=solicitud-presencial-recibo.controller.js.map