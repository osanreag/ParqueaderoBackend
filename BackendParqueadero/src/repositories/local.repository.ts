import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Local, LocalRelations, DuenoLoca} from '../models';
import {DuenoLocaRepository} from './dueno-loca.repository';

export class LocalRepository extends DefaultCrudRepository<
  Local,
  typeof Local.prototype.id,
  LocalRelations
> {

  public readonly duenoLoca: BelongsToAccessor<DuenoLoca, typeof Local.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('DuenoLocaRepository') protected duenoLocaRepositoryGetter: Getter<DuenoLocaRepository>,
  ) {
    super(Local, dataSource);
    this.duenoLoca = this.createBelongsToAccessorFor('duenoLoca', duenoLocaRepositoryGetter,);
    this.registerInclusionResolver('duenoLoca', this.duenoLoca.inclusionResolver);
  }
}
