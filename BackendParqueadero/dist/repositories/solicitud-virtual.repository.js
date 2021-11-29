"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudVirtualRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SolicitudVirtualRepository = class SolicitudVirtualRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter, lugarParqueaderoRepositoryGetter, reciboRepositoryGetter) {
        super(models_1.SolicitudVirtual, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.lugarParqueaderoRepositoryGetter = lugarParqueaderoRepositoryGetter;
        this.reciboRepositoryGetter = reciboRepositoryGetter;
        this.recibo = this.createBelongsToAccessorFor('recibo', reciboRepositoryGetter);
        this.registerInclusionResolver('recibo', this.recibo.inclusionResolver);
        this.lugarParqueadero = this.createHasOneRepositoryFactoryFor('lugarParqueadero', lugarParqueaderoRepositoryGetter);
        this.registerInclusionResolver('lugarParqueadero', this.lugarParqueadero.inclusionResolver);
        this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter);
        this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
    }
};
SolicitudVirtualRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('ClienteRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('LugarParqueaderoRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('ReciboRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function, Function])
], SolicitudVirtualRepository);
exports.SolicitudVirtualRepository = SolicitudVirtualRepository;
//# sourceMappingURL=solicitud-virtual.repository.js.map