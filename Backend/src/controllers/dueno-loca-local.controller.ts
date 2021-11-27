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
  Local,
} from '../models';
import {DuenoLocaRepository} from '../repositories';

export class DuenoLocaLocalController {
  constructor(
    @repository(DuenoLocaRepository) protected duenoLocaRepository: DuenoLocaRepository,
  ) { }

  @get('/dueno-locas/{id}/locals', {
    responses: {
      '200': {
        description: 'Array of DuenoLoca has many Local',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Local)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Local>,
  ): Promise<Local[]> {
    return this.duenoLocaRepository.locals(id).find(filter);
  }

  @post('/dueno-locas/{id}/locals', {
    responses: {
      '200': {
        description: 'DuenoLoca model instance',
        content: {'application/json': {schema: getModelSchemaRef(Local)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof DuenoLoca.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Local, {
            title: 'NewLocalInDuenoLoca',
            exclude: ['id'],
            optional: ['duenoLocaId']
          }),
        },
      },
    }) local: Omit<Local, 'id'>,
  ): Promise<Local> {
    return this.duenoLocaRepository.locals(id).create(local);
  }

  @patch('/dueno-locas/{id}/locals', {
    responses: {
      '200': {
        description: 'DuenoLoca.Local PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Local, {partial: true}),
        },
      },
    })
    local: Partial<Local>,
    @param.query.object('where', getWhereSchemaFor(Local)) where?: Where<Local>,
  ): Promise<Count> {
    return this.duenoLocaRepository.locals(id).patch(local, where);
  }

  @del('/dueno-locas/{id}/locals', {
    responses: {
      '200': {
        description: 'DuenoLoca.Local DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Local)) where?: Where<Local>,
  ): Promise<Count> {
    return this.duenoLocaRepository.locals(id).delete(where);
  }
}
