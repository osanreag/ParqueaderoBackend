import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {SolicitudPresencial, SolicitudPresencialRelations, DuenoLoca, LugarParqueadero, Recibo} from '../models';
import {DuenoLocaRepository} from './dueno-loca.repository';
import {LugarParqueaderoRepository} from './lugar-parqueadero.repository';
import {ReciboRepository} from './recibo.repository';

export class SolicitudPresencialRepository extends DefaultCrudRepository<
  SolicitudPresencial,
  typeof SolicitudPresencial.prototype.id,
  SolicitudPresencialRelations
> {

  public readonly duenoLoca: BelongsToAccessor<DuenoLoca, typeof SolicitudPresencial.prototype.id>;

  public readonly lugarParqueadero: HasOneRepositoryFactory<LugarParqueadero, typeof SolicitudPresencial.prototype.id>;

  public readonly recibo: BelongsToAccessor<Recibo, typeof SolicitudPresencial.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('DuenoLocaRepository') protected duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>, @repository.getter('LugarParqueaderoRepository') protected lugarParqueaderoRepositoryGetter: Getter<LugarParqueaderoRepository>, @repository.getter('ReciboRepository') protected reciboRepositoryGetter: Getter<ReciboRepository>,
  ) {
    super(SolicitudPresencial, dataSource);
    this.recibo = this.createBelongsToAccessorFor('recibo', reciboRepositoryGetter,);
    this.registerInclusionResolver('recibo', this.recibo.inclusionResolver);
    this.lugarParqueadero = this.createHasOneRepositoryFactoryFor('lugarParqueadero', lugarParqueaderoRepositoryGetter);
    this.registerInclusionResolver('lugarParqueadero', this.lugarParqueadero.inclusionResolver);
    this.duenoLoca = this.createBelongsToAccessorFor('duenoLoca', duenoLocaRepositoryGetter,);
    this.registerInclusionResolver('duenoLoca', this.duenoLoca.inclusionResolver);
  }
}
