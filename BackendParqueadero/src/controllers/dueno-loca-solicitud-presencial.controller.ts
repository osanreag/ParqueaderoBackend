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
  SolicitudPresencial,
} from '../models';
import {DuenoLocaRepository} from '../repositories';

export class DuenoLocaSolicitudPresencialController {
  constructor(
    @repository(DuenoLocaRepository) protected duenoLocaRepository: DuenoLocaRepository,
  ) { }

  @get('/dueno-locas/{id}/solicitud-presencial', {
    responses: {
      '200': {
        description: 'DuenoLoca has one SolicitudPresencial',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SolicitudPresencial),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudPresencial>,
  ): Promise<SolicitudPresencial> {
    return this.duenoLocaRepository.solicitudPresencial(id).get(filter);
  }

  @post('/dueno-locas/{id}/solicitud-presencial', {
    responses: {
      '200': {
        description: 'DuenoLoca model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudPresencial)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DuenoLoca.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudPresencial, {
            title: 'NewSolicitudPresencialInDuenoLoca',
            exclude: ['id'],
            optional: ['duenoLocaId']
          }),
        },
      },
    }) solicitudPresencial: Omit<SolicitudPresencial, 'id'>,
  ): Promise<SolicitudPresencial> {
    return this.duenoLocaRepository.solicitudPresencial(id).create(solicitudPresencial);
  }

  @patch('/dueno-locas/{id}/solicitud-presencial', {
    responses: {
      '200': {
        description: 'DuenoLoca.SolicitudPresencial PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudPresencial, {partial: true}),
        },
      },
    })
    solicitudPresencial: Partial<SolicitudPresencial>,
    @param.query.object('where', getWhereSchemaFor(SolicitudPresencial)) where?: Where<SolicitudPresencial>,
  ): Promise<Count> {
    return this.duenoLocaRepository.solicitudPresencial(id).patch(solicitudPresencial, where);
  }

  @del('/dueno-locas/{id}/solicitud-presencial', {
    responses: {
      '200': {
        description: 'DuenoLoca.SolicitudPresencial DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudPresencial)) where?: Where<SolicitudPresencial>,
  ): Promise<Count> {
    return this.duenoLocaRepository.solicitudPresencial(id).delete(where);
  }
}
