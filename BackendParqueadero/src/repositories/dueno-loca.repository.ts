import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {DuenoLoca, DuenoLocaRelations, Local, SolicitudPresencial, Vehiculo} from '../models';
import {LocalRepository} from './local.repository';
import {SolicitudPresencialRepository} from './solicitud-presencial.repository';
import {VehiculoRepository} from './vehiculo.repository';

export class DuenoLocaRepository extends DefaultCrudRepository<
  DuenoLoca,
  typeof DuenoLoca.prototype.id,
  DuenoLocaRelations
> {

  public readonly locals: HasManyRepositoryFactory<Local, typeof DuenoLoca.prototype.id>;

  public readonly solicitudPresencial: HasOneRepositoryFactory<SolicitudPresencial, typeof DuenoLoca.prototype.id>;

  public readonly vehiculo: HasOneRepositoryFactory<Vehiculo, typeof DuenoLoca.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('LocalRepository') protected localRepositoryGetter: Getter<LocalRepository>, @repository.getter('SolicitudPresencialRepository') protected solicitudPresencialRepositoryGetter: Getter<SolicitudPresencialRepository>, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(DuenoLoca, dataSource);
    this.vehiculo = this.createHasOneRepositoryFactoryFor('vehiculo', vehiculoRepositoryGetter);
    this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
    this.solicitudPresencial = this.createHasOneRepositoryFactoryFor('solicitudPresencial', solicitudPresencialRepositoryGetter);
    this.registerInclusionResolver('solicitudPresencial', this.solicitudPresencial.inclusionResolver);
    this.locals = this.createHasManyRepositoryFactoryFor('locals', localRepositoryGetter,);
    this.registerInclusionResolver('locals', this.locals.inclusionResolver);
  }
}
