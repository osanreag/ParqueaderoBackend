"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ClienteRepository = class ClienteRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, vehiculoRepositoryGetter, solicitudVirtualRepositoryGetter) {
        super(models_1.Cliente, dataSource);
        this.vehiculoRepositoryGetter = vehiculoRepositoryGetter;
        this.solicitudVirtualRepositoryGetter = solicitudVirtualRepositoryGetter;
        this.solicitudVirtuals = this.createHasManyRepositoryFactoryFor('solicitudVirtuals', solicitudVirtualRepositoryGetter);
        this.registerInclusionResolver('solicitudVirtuals', this.solicitudVirtuals.inclusionResolver);
        this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter);
        this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
    }
};
ClienteRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('VehiculoRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('SolicitudVirtualRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function])
], ClienteRepository);
exports.ClienteRepository = ClienteRepository;
//# sourceMappingURL=cliente.repository.js.map