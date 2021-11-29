import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Recibo, ReciboRelations } from '../models';
export declare class ReciboRepository extends DefaultCrudRepository<Recibo, typeof Recibo.prototype.id, ReciboRelations> {
    constructor(dataSource: MongodbDataSource);
}
