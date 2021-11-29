import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Vehiculo, VehiculoRelations, Cliente, DuenoLoca } from '../models';
import { ClienteRepository } from './cliente.repository';
import { DuenoLocaRepository } from './dueno-loca.repository';
export declare class VehiculoRepository extends DefaultCrudRepository<Vehiculo, typeof Vehiculo.prototype.id, VehiculoRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof Vehiculo.prototype.id>;
    readonly duenoLoca: BelongsToAccessor<DuenoLoca, typeof Vehiculo.prototype.id>;
    constructor(dataSource: MongodbDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>);
}
