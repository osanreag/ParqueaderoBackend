"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiculoClienteController = class VehiculoClienteController {
    constructor(vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }
    async getCliente(id) {
        return this.vehiculoRepository.cliente(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vehiculos/{id}/cliente', {
        responses: {
            '200': {
                description: 'Cliente belonging to Vehiculo',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cliente) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoClienteController.prototype, "getCliente", null);
VehiculoClienteController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VehiculoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VehiculoRepository])
], VehiculoClienteController);
exports.VehiculoClienteController = VehiculoClienteController;
//# sourceMappingURL=vehiculo-cliente.controller.js.map