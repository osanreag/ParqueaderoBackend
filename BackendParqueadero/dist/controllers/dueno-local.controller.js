"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuenoLocalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DuenoLocalController = class DuenoLocalController {
    constructor(duenoLocaRepository) {
        this.duenoLocaRepository = duenoLocaRepository;
    }
    async create(duenoLoca) {
        return this.duenoLocaRepository.create(duenoLoca);
    }
    async count(where) {
        return this.duenoLocaRepository.count(where);
    }
    async find(filter) {
        return this.duenoLocaRepository.find(filter);
    }
    async updateAll(duenoLoca, where) {
        return this.duenoLocaRepository.updateAll(duenoLoca, where);
    }
    async findById(id, filter) {
        return this.duenoLocaRepository.findById(id, filter);
    }
    async updateById(id, duenoLoca) {
        await this.duenoLocaRepository.updateById(id, duenoLoca);
    }
    async replaceById(id, duenoLoca) {
        await this.duenoLocaRepository.replaceById(id, duenoLoca);
    }
    async deleteById(id) {
        await this.duenoLocaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/dueno-locas'),
    (0, rest_1.response)(200, {
        description: 'DuenoLoca model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca, {
                    title: 'NewDuenoLoca',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/dueno-locas/count'),
    (0, rest_1.response)(200, {
        description: 'DuenoLoca model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.DuenoLoca)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/dueno-locas'),
    (0, rest_1.response)(200, {
        description: 'Array of DuenoLoca model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.DuenoLoca)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/dueno-locas'),
    (0, rest_1.response)(200, {
        description: 'DuenoLoca PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.DuenoLoca)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.DuenoLoca, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/dueno-locas/{id}'),
    (0, rest_1.response)(200, {
        description: 'DuenoLoca model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.DuenoLoca, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/dueno-locas/{id}'),
    (0, rest_1.response)(204, {
        description: 'DuenoLoca PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DuenoLoca]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/dueno-locas/{id}'),
    (0, rest_1.response)(204, {
        description: 'DuenoLoca PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.DuenoLoca]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/dueno-locas/{id}'),
    (0, rest_1.response)(204, {
        description: 'DuenoLoca DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DuenoLocalController.prototype, "deleteById", null);
DuenoLocalController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.DuenoLocaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.DuenoLocaRepository])
], DuenoLocalController);
exports.DuenoLocalController = DuenoLocalController;
//# sourceMappingURL=dueno-local.controller.js.map