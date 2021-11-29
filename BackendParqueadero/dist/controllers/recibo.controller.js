"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReciboController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReciboController = class ReciboController {
    constructor(reciboRepository) {
        this.reciboRepository = reciboRepository;
    }
    async create(recibo) {
        return this.reciboRepository.create(recibo);
    }
    async count(where) {
        return this.reciboRepository.count(where);
    }
    async find(filter) {
        return this.reciboRepository.find(filter);
    }
    async updateAll(recibo, where) {
        return this.reciboRepository.updateAll(recibo, where);
    }
    async findById(id, filter) {
        return this.reciboRepository.findById(id, filter);
    }
    async updateById(id, recibo) {
        await this.reciboRepository.updateById(id, recibo);
    }
    async replaceById(id, recibo) {
        await this.reciboRepository.replaceById(id, recibo);
    }
    async deleteById(id) {
        await this.reciboRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/recibos'),
    (0, rest_1.response)(200, {
        description: 'Recibo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Recibo) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recibo, {
                    title: 'NewRecibo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/recibos/count'),
    (0, rest_1.response)(200, {
        description: 'Recibo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Recibo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/recibos'),
    (0, rest_1.response)(200, {
        description: 'Array of Recibo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Recibo, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Recibo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/recibos'),
    (0, rest_1.response)(200, {
        description: 'Recibo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recibo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Recibo)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Recibo, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/recibos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Recibo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recibo, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Recibo, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/recibos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Recibo PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Recibo, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Recibo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/recibos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Recibo PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Recibo]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/recibos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Recibo DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ReciboController.prototype, "deleteById", null);
ReciboController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ReciboRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ReciboRepository])
], ReciboController);
exports.ReciboController = ReciboController;
//# sourceMappingURL=recibo.controller.js.map