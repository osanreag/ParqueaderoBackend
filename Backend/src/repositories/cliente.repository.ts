import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Vehiculo, SolicitudVirtual} from '../models';
import {VehiculoRepository} from './vehiculo.repository';
import {SolicitudVirtualRepository} from './solicitud-virtual.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Cliente.prototype.id>;

  public readonly solicitudVirtuals: HasManyRepositoryFactory<SolicitudVirtual, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>, @repository.getter('SolicitudVirtualRepository') protected solicitudVirtualRepositoryGetter: Getter<SolicitudVirtualRepository>,
  ) {
    super(Cliente, dataSource);
    this.solicitudVirtuals = this.createHasManyRepositoryFactoryFor('solicitudVirtuals', solicitudVirtualRepositoryGetter,);
    this.registerInclusionResolver('solicitudVirtuals', this.solicitudVirtuals.inclusionResolver);
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
  }
}
