import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Local,
  DuenoLoca,
} from '../models';
import {LocalRepository} from '../repositories';

export class LocalDuenoLocaController {
  constructor(
    @repository(LocalRepository)
    public localRepository: LocalRepository,
  ) { }

  @get('/locals/{id}/dueno-loca', {
    responses: {
      '200': {
        description: 'DuenoLoca belonging to Local',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DuenoLoca)},
          },
        },
      },
    },
  })
  async getDuenoLoca(
    @param.path.string('id') id: typeof Local.prototype.id,
  ): Promise<DuenoLoca> {
    return this.localRepository.duenoLoca(id);
  }
}
