import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Recibo, ReciboRelations} from '../models';

export class ReciboRepository extends DefaultCrudRepository<
  Recibo,
  typeof Recibo.prototype.id,
  ReciboRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Recibo, dataSource);
  }
}
