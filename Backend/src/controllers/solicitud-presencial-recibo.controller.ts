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
  Recibo,
} from '../models';
import {SolicitudPresencialRepository} from '../repositories';

export class SolicitudPresencialReciboController {
  constructor(
    @repository(SolicitudPresencialRepository)
    public solicitudPresencialRepository: SolicitudPresencialRepository,
  ) { }

  @get('/solicitud-presencials/{id}/recibo', {
    responses: {
      '200': {
        description: 'Recibo belonging to SolicitudPresencial',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Recibo)},
          },
        },
      },
    },
  })
  async getRecibo(
    @param.path.string('id') id: typeof SolicitudPresencial.prototype.id,
  ): Promise<Recibo> {
    return this.solicitudPresencialRepository.recibo(id);
  }
}
