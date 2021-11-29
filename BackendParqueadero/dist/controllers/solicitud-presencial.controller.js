"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudPresencialController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SolicitudPresencialController = class SolicitudPresencialController {
    constructor(solicitudPresencialRepository) {
        this.solicitudPresencialRepository = solicitudPresencialRepository;
    }
    async create(solicitudPresencial) {
        return this.solicitudPresencialRepository.create(solicitudPresencial);
    }
    async count(where) {
        return this.solicitudPresencialRepository.count(where);
    }
    async find(filter) {
        return this.solicitudPresencialRepository.find(filter);
    }
    async updateAll(solicitudPresencial, where) {
        return this.solicitudPresencialRepository.updateAll(solicitudPresencial, where);
    }
    async findById(id, filter) {
        return this.solicitudPresencialRepository.findById(id, filter);
    }
    async updateById(id, solicitudPresencial) {
        await this.solicitudPresencialRepository.updateById(id, solicitudPresencial);
    }
    async replaceById(id, solicitudPresencial) {
        await this.solicitudPresencialRepository.replaceById(id, solicitudPresencial);
    }
    async deleteById(id) {
        await this.solicitudPresencialRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/solicitud-presencials'),
    (0, rest_1.response)(200, {
        description: 'SolicitudPresencial model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial, {
                    title: 'NewSolicitudPresencial',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-presencials/count'),
    (0, rest_1.response)(200, {
        description: 'SolicitudPresencial model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.SolicitudPresencial)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-presencials'),
    (0, rest_1.response)(200, {
        description: 'Array of SolicitudPresencial model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.SolicitudPresencial)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicitud-presencials'),
    (0, rest_1.response)(200, {
        description: 'SolicitudPresencial PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.SolicitudPresencial)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.SolicitudPresencial, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/solicitud-presencials/{id}'),
    (0, rest_1.response)(200, {
        description: 'SolicitudPresencial model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.SolicitudPresencial, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/solicitud-presencials/{id}'),
    (0, rest_1.response)(204, {
        description: 'SolicitudPresencial PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.SolicitudPresencial, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.SolicitudPresencial]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/solicitud-presencials/{id}'),
    (0, rest_1.response)(204, {
        description: 'SolicitudPresencial PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.SolicitudPresencial]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/solicitud-presencials/{id}'),
    (0, rest_1.response)(204, {
        description: 'SolicitudPresencial DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SolicitudPresencialController.prototype, "deleteById", null);
SolicitudPresencialController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.SolicitudPresencialRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.SolicitudPresencialRepository])
], SolicitudPresencialController);
exports.SolicitudPresencialController = SolicitudPresencialController;
//# sourceMappingURL=solicitud-presencial.controller.js.map