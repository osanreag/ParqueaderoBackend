import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Cliente, ClienteRelations, Vehiculo, SolicitudVirtual } from '../models';
import { VehiculoRepository } from './vehiculo.repository';
import { SolicitudVirtualRepository } from './solicitud-virtual.repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    protected vehiculoRepositoryGetter: Getter<VehiculoRepository>;
    protected solicitudVirtualRepositoryGetter: Getter<SolicitudVirtualRepository>;
    readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Cliente.prototype.id>;
    readonly solicitudVirtuals: HasManyRepositoryFactory<SolicitudVirtual, typeof Cliente.prototype.id>;
    constructor(dataSource: MongodbDataSource, vehiculoRepositoryGetter: Getter<VehiculoRepository>, solicitudVirtualRepositoryGetter: Getter<SolicitudVirtualRepository>);
}
