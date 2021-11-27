import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Cliente, DuenoLoca} from '../models';
import {ClienteRepository} from './cliente.repository';
import {DuenoLocaRepository} from './dueno-loca.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Vehiculo.prototype.id>;

  public readonly duenoLoca: BelongsToAccessor<DuenoLoca, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('DuenoLocaRepository') protected duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.duenoLoca = this.createBelongsToAccessorFor('duenoLoca', duenoLocaRepositoryGetter,);
    this.registerInclusionResolver('duenoLoca', this.duenoLoca.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
