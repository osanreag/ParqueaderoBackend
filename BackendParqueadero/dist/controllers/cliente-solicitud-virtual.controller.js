"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteSolicitudVirtualController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteSolicitudVirtualController = class ClienteSolicitudVirtualController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async find(id, filter) {
        return this.clienteRepository.solicitudVirtuals(id).find(filter);
    }
    async create(id, solicitudVirtual) {
        return this.clienteRepository.solicitudVirtuals(id).create(solicitudVirtual);
    }
    async patch(id, solicitudVirtual, where) {
        return this.clienteRepository.solicitudVirtuals(id).patch(solicitudVirtual, where);
    }
    async delete(id, where) {
        return this.clienteRepository.solicitudVirtuals(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/{id}/solicitud-virtuals', {
        responses: {
            '200': {
                description: 'Array of Cliente has many SolicitudVirtual',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual) },
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
], ClienteSolicitudVirtualController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/clientes/{id}/solicitud-virtuals', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual, {
                    title: 'NewSolicitudVirtualInCliente',
                    exclude: ['id'],
                    optional: ['clienteId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteSolicitudVirtualController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/clientes/{id}/solicitud-virtuals', {
        responses: {
            '200': {
                description: 'Cliente.SolicitudVirtual PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.SolicitudVirtual))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteSolicitudVirtualController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/clientes/{id}/solicitud-virtuals', {
        responses: {
            '200': {
                description: 'Cliente.SolicitudVirtual DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.SolicitudVirtual))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteSolicitudVirtualController.prototype, "delete", null);
ClienteSolicitudVirtualController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteSolicitudVirtualController);
exports.ClienteSolicitudVirtualController = ClienteSolicitudVirtualController;
//# sourceMappingURL=cliente-solicitud-virtual.controller.js.map