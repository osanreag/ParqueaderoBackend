"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudVirtualLugarParqueaderoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudVirtualLugarParqueaderoController = class SolicitudVirtualLugarParqueaderoController {
    constructor(solicitudVirtualRepository) {
        this.solicitudVirtualRepository = solicitudVirtualRepository;
    }
    async get(id, filter) {
        return this.solicitudVirtualRepository.lugarParqueadero(id).get(filter);
    }
    async create(id, lugarParqueadero) {
        return this.solicitudVirtualRepository.lugarParqueadero(id).create(lugarParqueadero);
    }
    async patch(id, lugarParqueadero, where) {
        return this.solicitudVirtualRepository.lugarParqueadero(id).patch(lugarParqueadero, where);
    }
    async delete(id, where) {
        return this.solicitudVirtualRepository.lugarParqueadero(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-virtuals/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudVirtual has one LugarParqueadero',
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
], SolicitudVirtualLugarParqueaderoController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicitud-virtuals/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudVirtual model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, {
                    title: 'NewLugarParqueaderoInSolicitudVirtual',
                    exclude: ['id'],
                    optional: ['solicitudVirtualId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualLugarParqueaderoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicitud-virtuals/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudVirtual.LugarParqueadero PATCH success count',
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
], SolicitudVirtualLugarParqueaderoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicitud-virtuals/{id}/lugar-parqueadero', {
        responses: {
            '200': {
                description: 'SolicitudVirtual.LugarParqueadero DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.LugarParqueadero))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualLugarParqueaderoController.prototype, "delete", null);
SolicitudVirtualLugarParqueaderoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudVirtualRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudVirtualRepository])
], SolicitudVirtualLugarParqueaderoController);
exports.SolicitudVirtualLugarParqueaderoController = SolicitudVirtualLugarParqueaderoController;
//# sourceMappingURL=solicitud-virtual-lugar-parqueadero.controller.js.map