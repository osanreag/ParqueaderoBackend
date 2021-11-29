"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuenoLocaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let DuenoLocaRepository = class DuenoLocaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, localRepositoryGetter, solicitudPresencialRepositoryGetter, vehiculoRepositoryGetter) {
        super(models_1.DuenoLoca, dataSource);
        this.localRepositoryGetter = localRepositoryGetter;
        this.solicitudPresencialRepositoryGetter = solicitudPresencialRepositoryGetter;
        this.vehiculoRepositoryGetter = vehiculoRepositoryGetter;
        this.vehiculo = this.createHasOneRepositoryFactoryFor('vehiculo', vehiculoRepositoryGetter);
        this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
        this.solicitudPresencial = this.createHasOneRepositoryFactoryFor('solicitudPresencial', solicitudPresencialRepositoryGetter);
        this.registerInclusionResolver('solicitudPresencial', this.solicitudPresencial.inclusionResolver);
        this.locals = this.createHasManyRepositoryFactoryFor('locals', localRepositoryGetter);
        this.registerInclusionResolver('locals', this.locals.inclusionResolver);
    }
};
DuenoLocaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('LocalRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('SolicitudPresencialRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('VehiculoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function])
], DuenoLocaRepository);
exports.DuenoLocaRepository = DuenoLocaRepository;
//# sourceMappingURL=dueno-loca.repository.js.map