import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { DuenoLoca, DuenoLocaRelations, Local, SolicitudPresencial, Vehiculo } from '../models';
import { LocalRepository } from './local.repository';
import { SolicitudPresencialRepository } from './solicitud-presencial.repository';
import { VehiculoRepository } from './vehiculo.repository';
export declare class DuenoLocaRepository extends DefaultCrudRepository<DuenoLoca, typeof DuenoLoca.prototype.id, DuenoLocaRelations> {
    protected localRepositoryGetter: Getter<LocalRepository>;
    protected solicitudPresencialRepositoryGetter: Getter<SolicitudPresencialRepository>;
    protected vehiculoRepositoryGetter: Getter<VehiculoRepository>;
    readonly locals: HasManyRepositoryFactory<Local, typeof DuenoLoca.prototype.id>;
    readonly solicitudPresencial: HasOneRepositoryFactory<SolicitudPresencial, typeof DuenoLoca.prototype.id>;
    readonly vehiculo: HasOneRepositoryFactory<Vehiculo, typeof DuenoLoca.prototype.id>;
    constructor(dataSource: MongodbDataSource, localRepositoryGetter: Getter<LocalRepository>, solicitudPresencialRepositoryGetter: Getter<SolicitudPresencialRepository>, vehiculoRepositoryGetter: Getter<VehiculoRepository>);
}
