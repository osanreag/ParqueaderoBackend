import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {SolicitudVirtual, SolicitudVirtualRelations, Cliente, LugarParqueadero, Recibo} from '../models';
import {ClienteRepository} from './cliente.repository';
import {LugarParqueaderoRepository} from './lugar-parqueadero.repository';
import {ReciboRepository} from './recibo.repository';

export class SolicitudVirtualRepository extends DefaultCrudRepository<
  SolicitudVirtual,
  typeof SolicitudVirtual.prototype.id,
  SolicitudVirtualRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof SolicitudVirtual.prototype.id>;

  public readonly lugarParqueadero: HasOneRepositoryFactory<LugarParqueadero, typeof SolicitudVirtual.prototype.id>;

  public readonly recibo: BelongsToAccessor<Recibo, typeof SolicitudVirtual.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('LugarParqueaderoRepository') protected lugarParqueaderoRepositoryGetter: Getter<LugarParqueaderoRepository>, @repository.getter('ReciboRepository') protected reciboRepositoryGetter: Getter<ReciboRepository>,
  ) {
    super(SolicitudVirtual, dataSource);
    this.recibo = this.createBelongsToAccessorFor('recibo', reciboRepositoryGetter,);
    this.registerInclusionResolver('recibo', this.recibo.inclusionResolver);
    this.lugarParqueadero = this.createHasOneRepositoryFactoryFor('lugarParqueadero', lugarParqueaderoRepositoryGetter);
    this.registerInclusionResolver('lugarParqueadero', this.lugarParqueadero.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
