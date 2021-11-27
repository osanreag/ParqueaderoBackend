import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  DuenoLoca,
  Vehiculo,
} from '../models';
import {DuenoLocaRepository} from '../repositories';

export class DuenoLocaVehiculoController {
  constructor(
    @repository(DuenoLocaRepository) protected duenoLocaRepository: DuenoLocaRepository,
  ) { }

  @get('/dueno-locas/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'DuenoLoca has one Vehiculo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Vehiculo),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Vehiculo>,
  ): Promise<Vehiculo> {
    return this.duenoLocaRepository.vehiculo(id).get(filter);
  }

  @post('/dueno-locas/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'DuenoLoca model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehiculo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DuenoLoca.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculo, {
            title: 'NewVehiculoInDuenoLoca',
            exclude: ['id'],
            optional: ['duenoLocaId']
          }),
        },
      },
    }) vehiculo: Omit<Vehiculo, 'id'>,
  ): Promise<Vehiculo> {
    return this.duenoLocaRepository.vehiculo(id).create(vehiculo);
  }

  @patch('/dueno-locas/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'DuenoLoca.Vehiculo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculo, {partial: true}),
        },
      },
    })
    vehiculo: Partial<Vehiculo>,
    @param.query.object('where', getWhereSchemaFor(Vehiculo)) where?: Where<Vehiculo>,
  ): Promise<Count> {
    return this.duenoLocaRepository.vehiculo(id).patch(vehiculo, where);
  }

  @del('/dueno-locas/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'DuenoLoca.Vehiculo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Vehiculo)) where?: Where<Vehiculo>,
  ): Promise<Count> {
    return this.duenoLocaRepository.vehiculo(id).delete(where);
  }
}
