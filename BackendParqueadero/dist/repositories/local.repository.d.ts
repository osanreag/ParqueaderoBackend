import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Local, LocalRelations, DuenoLoca } from '../models';
import { DuenoLocaRepository } from './dueno-loca.repository';
export declare class LocalRepository extends DefaultCrudRepository<Local, typeof Local.prototype.id, LocalRelations> {
    protected duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>;
    readonly duenoLoca: BelongsToAccessor<DuenoLoca, typeof Local.prototype.id>;
    constructor(dataSource: MongodbDataSource, duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>);
}
