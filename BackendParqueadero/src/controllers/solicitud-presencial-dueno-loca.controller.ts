import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SolicitudPresencial,
  DuenoLoca,
} from '../models';
import {SolicitudPresencialRepository} from '../repositories';

export class SolicitudPresencialDuenoLocaController {
  constructor(
    @repository(SolicitudPresencialRepository)
    public solicitudPresencialRepository: SolicitudPresencialRepository,
  ) { }

  @get('/solicitud-presencials/{id}/dueno-loca', {
    responses: {
      '200': {
        description: 'DuenoLoca belonging to SolicitudPresencial',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DuenoLoca)},
          },
        },
      },
    },
  })
  async getDuenoLoca(
    @param.path.string('id') id: typeof SolicitudPresencial.prototype.id,
  ): Promise<DuenoLoca> {
    return this.solicitudPresencialRepository.duenoLoca(id);
  }
}
