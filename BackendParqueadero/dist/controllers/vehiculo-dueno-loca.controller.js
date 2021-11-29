"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoDuenoLocaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiculoDuenoLocaController = class VehiculoDuenoLocaController {
    constructor(vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }
    async getDuenoLoca(id) {
        return this.vehiculoRepository.duenoLoca(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/vehiculos/{id}/dueno-loca', {
        responses: {
            '200': {
                description: 'DuenoLoca belonging to Vehiculo',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.DuenoLoca) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VehiculoDuenoLocaController.prototype, "getDuenoLoca", null);
VehiculoDuenoLocaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VehiculoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VehiculoRepository])
], VehiculoDuenoLocaController);
exports.VehiculoDuenoLocaController = VehiculoDuenoLocaController;
//# sourceMappingURL=vehiculo-dueno-loca.controller.js.map