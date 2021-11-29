import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { SolicitudPresencial, SolicitudPresencialRelations, DuenoLoca, LugarParqueadero, Recibo } from '../models';
import { DuenoLocaRepository } from './dueno-loca.repository';
import { LugarParqueaderoRepository } from './lugar-parqueadero.repository';
import { ReciboRepository } from './recibo.repository';
export declare class SolicitudPresencialRepository extends DefaultCrudRepository<SolicitudPresencial, typeof SolicitudPresencial.prototype.id, SolicitudPresencialRelations> {
    protected duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>;
    protected lugarParqueaderoRepositoryGetter: Getter<LugarParqueaderoRepository>;
    protected reciboRepositoryGetter: Getter<ReciboRepository>;
    readonly duenoLoca: BelongsToAccessor<DuenoLoca, typeof SolicitudPresencial.prototype.id>;
    readonly lugarParqueadero: HasOneRepositoryFactory<LugarParqueadero, typeof SolicitudPresencial.prototype.id>;
    readonly recibo: BelongsToAccessor<Recibo, typeof SolicitudPresencial.prototype.id>;
    constructor(dataSource: MongodbDataSource, duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>, lugarParqueaderoRepositoryGetter: Getter<LugarParqueaderoRepository>, reciboRepositoryGetter: Getter<ReciboRepository>);
}
