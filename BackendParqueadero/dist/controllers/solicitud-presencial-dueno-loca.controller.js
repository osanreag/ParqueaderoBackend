"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudPresencialDuenoLocaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudPresencialDuenoLocaController = class SolicitudPresencialDuenoLocaController {
    constructor(solicitudPresencialRepository) {
        this.solicitudPresencialRepository = solicitudPresencialRepository;
    }
    async getDuenoLoca(id) {
        return this.solicitudPresencialRepository.duenoLoca(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-presencials/{id}/dueno-loca', {
        responses: {
            '200': {
                description: 'DuenoLoca belonging to SolicitudPresencial',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialDuenoLocaController.prototype, "getDuenoLoca", null);
SolicitudPresencialDuenoLocaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudPresencialRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudPresencialRepository])
], SolicitudPresencialDuenoLocaController);
exports.SolicitudPresencialDuenoLocaController = SolicitudPresencialDuenoLocaController;
//# sourceMappingURL=solicitud-presencial-dueno-loca.controller.js.map