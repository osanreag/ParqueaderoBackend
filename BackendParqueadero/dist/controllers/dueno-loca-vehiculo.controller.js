"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuenoLocaVehiculoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DuenoLocaVehiculoController = class DuenoLocaVehiculoController {
    constructor(duenoLocaRepository) {
        this.duenoLocaRepository = duenoLocaRepository;
    }
    async get(id, filter) {
        return this.duenoLocaRepository.vehiculo(id).get(filter);
    }
    async create(id, vehiculo) {
        return this.duenoLocaRepository.vehiculo(id).create(vehiculo);
    }
    async patch(id, vehiculo, where) {
        return this.duenoLocaRepository.vehiculo(id).patch(vehiculo, where);
    }
    async delete(id, where) {
        return this.duenoLocaRepository.vehiculo(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/dueno-locas/{id}/vehiculo', {
        responses: {
            '200': {
                description: 'DuenoLoca has one Vehiculo',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo),
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
], DuenoLocaVehiculoController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/dueno-locas/{id}/vehiculo', {
        responses: {
            '200': {
                description: 'DuenoLoca model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, {
                    title: 'NewVehiculoInDuenoLoca',
                    exclude: ['id'],
                    optional: ['duenoLocaId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaVehiculoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/dueno-locas/{id}/vehiculo', {
        responses: {
            '200': {
                description: 'DuenoLoca.Vehiculo PATCH success count',
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
], DuenoLocaVehiculoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/dueno-locas/{id}/vehiculo', {
        responses: {
            '200': {
                description: 'DuenoLoca.Vehiculo DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Vehiculo))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaVehiculoController.prototype, "delete", null);
DuenoLocaVehiculoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.DuenoLocaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.DuenoLocaRepository])
], DuenoLocaVehiculoController);
exports.DuenoLocaVehiculoController = DuenoLocaVehiculoController;
//# sourceMappingURL=dueno-loca-vehiculo.controller.js.map