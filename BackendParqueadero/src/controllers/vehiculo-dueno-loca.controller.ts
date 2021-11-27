import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Vehiculo,
  DuenoLoca,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoDuenoLocaController {
  constructor(
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/dueno-loca', {
    responses: {
      '200': {
        description: 'DuenoLoca belonging to Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(DuenoLoca)},
          },
        },
      },
    },
  })
  async getDuenoLoca(
    @param.path.string('id') id: typeof Vehiculo.prototype.id,
  ): Promise<DuenoLoca> {
    return this.vehiculoRepository.duenoLoca(id);
  }
}
