import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {LugarParqueadero, LugarParqueaderoRelations} from '../models';

export class LugarParqueaderoRepository extends DefaultCrudRepository<
  LugarParqueadero,
  typeof LugarParqueadero.prototype.id,
  LugarParqueaderoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(LugarParqueadero, dataSource);
  }
}
