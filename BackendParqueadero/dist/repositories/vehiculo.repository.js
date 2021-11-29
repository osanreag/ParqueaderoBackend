"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let VehiculoRepository = class VehiculoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter, duenoLocaRepositoryGetter) {
        super(models_1.Vehiculo, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.duenoLocaRepositoryGetter = duenoLocaRepositoryGetter;
        this.duenoLoca = this.createBelongsToAccessorFor('duenoLoca', duenoLocaRepositoryGetter);
        this.registerInclusionResolver('duenoLoca', this.duenoLoca.inclusionResolver);
        this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter);
        this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    }
};
VehiculoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ClienteRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('DuenoLocaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function])
], VehiculoRepository);
exports.VehiculoRepository = VehiculoRepository;
//# sourceMappingURL=vehiculo.repository.js.map