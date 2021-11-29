"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let LocalRepository = class LocalRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, duenoLocaRepositoryGetter) {
        super(models_1.Local, dataSource);
        this.duenoLocaRepositoryGetter = duenoLocaRepositoryGetter;
        this.duenoLoca = this.createBelongsToAccessorFor('duenoLoca', duenoLocaRepositoryGetter);
        this.registerInclusionResolver('duenoLoca', this.duenoLoca.inclusionResolver);
    }
};
LocalRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('DuenoLocaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function])
], LocalRepository);
exports.LocalRepository = LocalRepository;
//# sourceMappingURL=local.repository.js.map