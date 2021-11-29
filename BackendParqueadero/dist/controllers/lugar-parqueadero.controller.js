"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LugarParqueaderoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LugarParqueaderoController = class LugarParqueaderoController {
    constructor(lugarParqueaderoRepository) {
        this.lugarParqueaderoRepository = lugarParqueaderoRepository;
    }
    async create(lugarParqueadero) {
        return this.lugarParqueaderoRepository.create(lugarParqueadero);
    }
    async count(where) {
        return this.lugarParqueaderoRepository.count(where);
    }
    async find(filter) {
        return this.lugarParqueaderoRepository.find(filter);
    }
    async updateAll(lugarParqueadero, where) {
        return this.lugarParqueaderoRepository.updateAll(lugarParqueadero, where);
    }
    async findById(id, filter) {
        return this.lugarParqueaderoRepository.findById(id, filter);
    }
    async updateById(id, lugarParqueadero) {
        await this.lugarParqueaderoRepository.updateById(id, lugarParqueadero);
    }
    async replaceById(id, lugarParqueadero) {
        await this.lugarParqueaderoRepository.replaceById(id, lugarParqueadero);
    }
    async deleteById(id) {
        await this.lugarParqueaderoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/lugar-parqueaderos'),
    (0, rest_1.response)(200, {
        description: 'LugarParqueadero model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, {
                    title: 'NewLugarParqueadero',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/lugar-parqueaderos/count'),
    (0, rest_1.response)(200, {
        description: 'LugarParqueadero model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.LugarParqueadero)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/lugar-parqueaderos'),
    (0, rest_1.response)(200, {
        description: 'Array of LugarParqueadero model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.LugarParqueadero)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/lugar-parqueaderos'),
    (0, rest_1.response)(200, {
        description: 'LugarParqueadero PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.LugarParqueadero)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.LugarParqueadero, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/lugar-parqueaderos/{id}'),
    (0, rest_1.response)(200, {
        description: 'LugarParqueadero model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.LugarParqueadero, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/lugar-parqueaderos/{id}'),
    (0, rest_1.response)(204, {
        description: 'LugarParqueadero PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.LugarParqueadero, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.LugarParqueadero]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/lugar-parqueaderos/{id}'),
    (0, rest_1.response)(204, {
        description: 'LugarParqueadero PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.LugarParqueadero]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/lugar-parqueaderos/{id}'),
    (0, rest_1.response)(204, {
        description: 'LugarParqueadero DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LugarParqueaderoController.prototype, "deleteById", null);
LugarParqueaderoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.LugarParqueaderoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.LugarParqueaderoRepository])
], LugarParqueaderoController);
exports.LugarParqueaderoController = LugarParqueaderoController;
//# sourceMappingURL=lugar-parqueadero.controller.js.map