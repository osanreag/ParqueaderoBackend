import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  SolicitudVirtual,
  Recibo,
} from '../models';
import {SolicitudVirtualRepository} from '../repositories';

export class SolicitudVirtualReciboController {
  constructor(
    @repository(SolicitudVirtualRepository)
    public solicitudVirtualRepository: SolicitudVirtualRepository,
  ) { }

  @get('/solicitud-virtuals/{id}/recibo', {
    responses: {
      '200': {
        description: 'Recibo belonging to SolicitudVirtual',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Recibo)},
          },
        },
      },
    },
  })
  async getRecibo(
    @param.path.string('id') id: typeof SolicitudVirtual.prototype.id,
  ): Promise<Recibo> {
    return this.solicitudVirtualRepository.recibo(id);
  }
}
