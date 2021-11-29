"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudVirtualController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
//@authenticate("admin")
let SolicitudVirtualController = class SolicitudVirtualController {
    constructor(solicitudVirtualRepository) {
        this.solicitudVirtualRepository = solicitudVirtualRepository;
    }
    async create(solicitudVirtual) {
        return this.solicitudVirtualRepository.create(solicitudVirtual);
    }
    //@authenticate.skip()
    async count(where) {
        return this.solicitudVirtualRepository.count(where);
    }
    async find(filter) {
        return this.solicitudVirtualRepository.find(filter);
    }
    async updateAll(solicitudVirtual, where) {
        return this.solicitudVirtualRepository.updateAll(solicitudVirtual, where);
    }
    async findById(id, filter) {
        return this.solicitudVirtualRepository.findById(id, filter);
    }
    async updateById(id, solicitudVirtual) {
        await this.solicitudVirtualRepository.updateById(id, solicitudVirtual);
    }
    async replaceById(id, solicitudVirtual) {
        await this.solicitudVirtualRepository.replaceById(id, solicitudVirtual);
    }
    async deleteById(id) {
        await this.solicitudVirtualRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicitud-virtuals'),
    (0, rest_1.response)(200, {
        description: 'SolicitudVirtual model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual, {
                    title: 'NewSolicitudVirtual',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-virtuals/count'),
    (0, rest_1.response)(200, {
        description: 'SolicitudVirtual model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.SolicitudVirtual)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-virtuals'),
    (0, rest_1.response)(200, {
        description: 'Array of SolicitudVirtual model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.SolicitudVirtual)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicitud-virtuals'),
    (0, rest_1.response)(200, {
        description: 'SolicitudVirtual PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.SolicitudVirtual)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.SolicitudVirtual, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-virtuals/{id}'),
    (0, rest_1.response)(200, {
        description: 'SolicitudVirtual model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.SolicitudVirtual, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicitud-virtuals/{id}'),
    (0, rest_1.response)(204, {
        description: 'SolicitudVirtual PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudVirtual, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.SolicitudVirtual]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/solicitud-virtuals/{id}'),
    (0, rest_1.response)(204, {
        description: 'SolicitudVirtual PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.SolicitudVirtual]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicitud-virtuals/{id}'),
    (0, rest_1.response)(204, {
        description: 'SolicitudVirtual DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudVirtualController.prototype, "deleteById", null);
SolicitudVirtualController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudVirtualRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudVirtualRepository])
], SolicitudVirtualController);
exports.SolicitudVirtualController = SolicitudVirtualController;
//# sourceMappingURL=solicitud-virtual.controller.js.map