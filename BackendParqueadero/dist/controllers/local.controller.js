"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let LocalController = class LocalController {
    constructor(localRepository) {
        this.localRepository = localRepository;
    }
    async create(local) {
        return this.localRepository.create(local);
    }
    async count(where) {
        return this.localRepository.count(where);
    }
    async find(filter) {
        return this.localRepository.find(filter);
    }
    async updateAll(local, where) {
        return this.localRepository.updateAll(local, where);
    }
    async findById(id, filter) {
        return this.localRepository.findById(id, filter);
    }
    async updateById(id, local) {
        await this.localRepository.updateById(id, local);
    }
    async replaceById(id, local) {
        await this.localRepository.replaceById(id, local);
    }
    async deleteById(id) {
        await this.localRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/locals'),
    (0, rest_1.response)(200, {
        description: 'Local model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Local) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Local, {
                    title: 'NewLocal',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/locals/count'),
    (0, rest_1.response)(200, {
        description: 'Local model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Local)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/locals'),
    (0, rest_1.response)(200, {
        description: 'Array of Local model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Local, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Local)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/locals'),
    (0, rest_1.response)(200, {
        description: 'Local PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Local, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Local)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Local, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/locals/{id}'),
    (0, rest_1.response)(200, {
        description: 'Local model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Local, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Local, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/locals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Local PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Local, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Local]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/locals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Local PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Local]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/locals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Local DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], LocalController.prototype, "deleteById", null);
LocalController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.LocalRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.LocalRepository])
], LocalController);
exports.LocalController = LocalController;
//# sourceMappingURL=local.controller.js.map