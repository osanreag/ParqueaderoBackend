"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteVehiculoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteVehiculoController = class ClienteVehiculoController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async find(id, filter) {
        return this.clienteRepository.vehiculos(id).find(filter);
    }
    async create(id, vehiculo) {
        return this.clienteRepository.vehiculos(id).create(vehiculo);
    }
    async patch(id, vehiculo, where) {
        return this.clienteRepository.vehiculos(id).patch(vehiculo, where);
    }
    async delete(id, where) {
        return this.clienteRepository.vehiculos(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/{id}/vehiculos', {
        responses: {
            '200': {
                description: 'Array of Cliente has many Vehiculo',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo) },
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
], ClienteVehiculoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/clientes/{id}/vehiculos', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, {
                    title: 'NewVehiculoInCliente',
                    exclude: ['id'],
                    optional: ['clienteId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteVehiculoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/clientes/{id}/vehiculos', {
        responses: {
            '200': {
                description: 'Cliente.Vehiculo PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Vehiculo))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteVehiculoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/clientes/{id}/vehiculos', {
        responses: {
            '200': {
                description: 'Cliente.Vehiculo DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Vehiculo))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteVehiculoController.prototype, "delete", null);
ClienteVehiculoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteVehiculoController);
exports.ClienteVehiculoController = ClienteVehiculoController;
//# sourceMappingURL=cliente-vehiculo.controller.js.map