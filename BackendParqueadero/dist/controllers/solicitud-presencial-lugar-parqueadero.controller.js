"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudPresencialLugarParqueaderoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudPresencialLugarParqueaderoController = class SolicitudPresencialLugarParqueaderoController {
    constructor(solicitudPresencialRepository) {
        this.solicitudPresencialRepository = solicitudPresencialRepository;
    }
    async get(id, filter) {
        return this.solicitudPresencialRepository.lugarParqueadero(id).get(filter);
    }
    async create(id, lugarParqueadero) {
        return this.solicitudPresencialRepository.lugarParqueadero(id).create(lugarParqueadero);
    }
    async patch(id, lugarParqueadero, where) {
        return this.solicitudPresencialRepository.lugarParqueadero(id).patch(lugarParqueadero, where);
    }
    async delete(id, where) {
        return this.solicitudPresencialRepository.lugarParqueadero(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-presencials/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudPresencial has one LugarParqueadero',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero),
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
], SolicitudPresencialLugarParqueaderoController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicitud-presencials/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudPresencial model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, {
                    title: 'NewLugarParqueaderoInSolicitudPresencial',
                    exclude: ['id'],
                    optional: ['solicitudPresencialId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialLugarParqueaderoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicitud-presencials/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudPresencial.LugarParqueadero PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.LugarParqueadero))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialLugarParqueaderoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicitud-presencials/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudPresencial.LugarParqueadero DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.LugarParqueadero))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialLugarParqueaderoController.prototype, "delete", null);
SolicitudPresencialLugarParqueaderoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudPresencialRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudPresencialRepository])
], SolicitudPresencialLugarParqueaderoController);
exports.SolicitudPresencialLugarParqueaderoController = SolicitudPresencialLugarParqueaderoController;
//# sourceMappingURL=solicitud-presencial-lugar-parqueadero.controller.js.map