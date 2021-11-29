"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuenoLocaSolicitudPresencialController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DuenoLocaSolicitudPresencialController = class DuenoLocaSolicitudPresencialController {
    constructor(duenoLocaRepository) {
        this.duenoLocaRepository = duenoLocaRepository;
    }
    async get(id, filter) {
        return this.duenoLocaRepository.solicitudPresencial(id).get(filter);
    }
    async create(id, solicitudPresencial) {
        return this.duenoLocaRepository.solicitudPresencial(id).create(solicitudPresencial);
    }
    async patch(id, solicitudPresencial, where) {
        return this.duenoLocaRepository.solicitudPresencial(id).patch(solicitudPresencial, where);
    }
    async delete(id, where) {
        return this.duenoLocaRepository.solicitudPresencial(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/dueno-locas/{id}/solicitud-presencial', {
        responses: {
            '200': {
                description: 'DuenoLoca has one SolicitudPresencial',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial),
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaSolicitudPresencialController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/dueno-locas/{id}/solicitud-presencial', {
        responses: {
            '200': {
                description: 'DuenoLoca model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial, {
                    title: 'NewSolicitudPresencialInDuenoLoca',
                    exclude: ['id'],
                    optional: ['duenoLocaId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaSolicitudPresencialController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/dueno-locas/{id}/solicitud-presencial', {
        responses: {
            '200': {
                description: 'DuenoLoca.SolicitudPresencial PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.SolicitudPresencial))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaSolicitudPresencialController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/dueno-locas/{id}/solicitud-presencial', {
        responses: {
            '200': {
                description: 'DuenoLoca.SolicitudPresencial DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.SolicitudPresencial))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaSolicitudPresencialController.prototype, "delete", null);
DuenoLocaSolicitudPresencialController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.DuenoLocaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.DuenoLocaRepository])
], DuenoLocaSolicitudPresencialController);
exports.DuenoLocaSolicitudPresencialController = DuenoLocaSolicitudPresencialController;
//# sourceMappingURL=dueno-loca-solicitud-presencial.controller.js.map