import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {DuenoLoca} from '../models';
import {DuenoLocaRepository} from '../repositories';

export class DuenoLocalController {
  constructor(
    @repository(DuenoLocaRepository)
    public duenoLocaRepository : DuenoLocaRepository,
  ) {}

  @post('/dueno-locas')
  @response(200, {
    description: 'DuenoLoca model instance',
    content: {'application/json': {schema: getModelSchemaRef(DuenoLoca)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DuenoLoca, {
            title: 'NewDuenoLoca',
            exclude: ['id'],
          }),
        },
      },
    })
    duenoLoca: Omit<DuenoLoca, 'id'>,
  ): Promise<DuenoLoca> {
    return this.duenoLocaRepository.create(duenoLoca);
  }

  @get('/dueno-locas/count')
  @response(200, {
    description: 'DuenoLoca model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DuenoLoca) where?: Where<DuenoLoca>,
  ): Promise<Count> {
    return this.duenoLocaRepository.count(where);
  }

  @get('/dueno-locas')
  @response(200, {
    description: 'Array of DuenoLoca model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DuenoLoca, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DuenoLoca) filter?: Filter<DuenoLoca>,
  ): Promise<DuenoLoca[]> {
    return this.duenoLocaRepository.find(filter);
  }

  @patch('/dueno-locas')
  @response(200, {
    description: 'DuenoLoca PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DuenoLoca, {partial: true}),
        },
      },
    })
    duenoLoca: DuenoLoca,
    @param.where(DuenoLoca) where?: Where<DuenoLoca>,
  ): Promise<Count> {
    return this.duenoLocaRepository.updateAll(duenoLoca, where);
  }

  @get('/dueno-locas/{id}')
  @response(200, {
    description: 'DuenoLoca model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DuenoLoca, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DuenoLoca, {exclude: 'where'}) filter?: FilterExcludingWhere<DuenoLoca>
  ): Promise<DuenoLoca> {
    return this.duenoLocaRepository.findById(id, filter);
  }

  @patch('/dueno-locas/{id}')
  @response(204, {
    description: 'DuenoLoca PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DuenoLoca, {partial: true}),
        },
      },
    })
    duenoLoca: DuenoLoca,
  ): Promise<void> {
    await this.duenoLocaRepository.updateById(id, duenoLoca);
  }

  @put('/dueno-locas/{id}')
  @response(204, {
    description: 'DuenoLoca PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() duenoLoca: DuenoLoca,
  ): Promise<void> {
    await this.duenoLocaRepository.replaceById(id, duenoLoca);
  }

  @del('/dueno-locas/{id}')
  @response(204, {
    description: 'DuenoLoca DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.duenoLocaRepository.deleteById(id);
  }
}
