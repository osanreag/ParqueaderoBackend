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
  Cliente,
} from '../models';
import {SolicitudVirtualRepository} from '../repositories';

export class SolicitudVirtualClienteController {
  constructor(
    @repository(SolicitudVirtualRepository)
    public solicitudVirtualRepository: SolicitudVirtualRepository,
  ) { }

  @get('/solicitud-virtuals/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to SolicitudVirtual',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof SolicitudVirtual.prototype.id,
  ): Promise<Cliente> {
    return this.solicitudVirtualRepository.cliente(id);
  }
}
