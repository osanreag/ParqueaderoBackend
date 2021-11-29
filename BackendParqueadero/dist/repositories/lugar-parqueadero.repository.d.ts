import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { LugarParqueadero, LugarParqueaderoRelations } from '../models';
export declare class LugarParqueaderoRepository extends DefaultCrudRepository<LugarParqueadero, typeof LugarParqueadero.prototype.id, LugarParqueaderoRelations> {
    constructor(dataSource: MongodbDataSource);
}
