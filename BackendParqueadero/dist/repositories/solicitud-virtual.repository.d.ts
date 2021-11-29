import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { SolicitudVirtual, SolicitudVirtualRelations, Cliente, LugarParqueadero, Recibo } from '../models';
import { ClienteRepository } from './cliente.repository';
import { LugarParqueaderoRepository } from './lugar-parqueadero.repository';
import { ReciboRepository } from './recibo.repository';
export declare class SolicitudVirtualRepository extends DefaultCrudRepository<SolicitudVirtual, typeof SolicitudVirtual.prototype.id, SolicitudVirtualRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected lugarParqueaderoRepositoryGetter: Getter<LugarParqueaderoRepository>;
    protected reciboRepositoryGetter: Getter<ReciboRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof SolicitudVirtual.prototype.id>;
    readonly lugarParqueadero: HasOneRepositoryFactory<LugarParqueadero, typeof SolicitudVirtual.prototype.id>;
    readonly recibo: BelongsToAccessor<Recibo, typeof SolicitudVirtual.prototype.id>;
    constructor(dataSource: MongodbDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, lugarParqueaderoRepositoryGetter: Getter<LugarParqueaderoRepository>, reciboRepositoryGetter: Getter<ReciboRepository>);
}
