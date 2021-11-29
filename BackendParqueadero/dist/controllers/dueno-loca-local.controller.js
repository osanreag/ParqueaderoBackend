"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuenoLocaLocalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DuenoLocaLocalController = class DuenoLocaLocalController {
    constructor(duenoLocaRepository) {
        this.duenoLocaRepository = duenoLocaRepository;
    }
    async find(id, filter) {
        return this.duenoLocaRepository.locals(id).find(filter);
    }
    async create(id, local) {
        return this.duenoLocaRepository.locals(id).create(local);
    }
    async patch(id, local, where) {
        return this.duenoLocaRepository.locals(id).patch(local, where);
    }
    async delete(id, where) {
        return this.duenoLocaRepository.locals(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/dueno-locas/{id}/locals', {
        responses: {
            '200': {
                description: 'Array of DuenoLoca has many Local',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Local) },
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
], DuenoLocaLocalController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/dueno-locas/{id}/locals', {
        responses: {
            '200': {
                description: 'DuenoLoca model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Local) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Local, {
                    title: 'NewLocalInDuenoLoca',
                    exclude: ['id'],
                    optional: ['duenoLocaId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaLocalController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/dueno-locas/{id}/locals', {
        responses: {
            '200': {
                description: 'DuenoLoca.Local PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Local, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Local))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaLocalController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/dueno-locas/{id}/locals', {
        responses: {
            '200': {
                description: 'DuenoLoca.Local DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Local))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocaLocalController.prototype, "delete", null);
DuenoLocaLocalController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.DuenoLocaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.DuenoLocaRepository])
], DuenoLocaLocalController);
exports.DuenoLocaLocalController = DuenoLocaLocalController;
//# sourceMappingURL=dueno-loca-local.controller.js.map