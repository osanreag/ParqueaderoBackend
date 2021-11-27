import {Entity, model, property} from '@loopback/repository';

@model()
export class LugarParqueadero extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;

  @property({
    type: 'number',
    required: true,
  })
  numeroLugar: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoEspacio: string;

  @property({
    type: 'string',
  })
  solicitudPresencialId?: string;

  @property({
    type: 'string',
  })
  solicitudVirtualId?: string;

  constructor(data?: Partial<LugarParqueadero>) {
    super(data);
  }
}

export interface LugarParqueaderoRelations {
  // describe navigational properties here
}

export type LugarParqueaderoWithRelations = LugarParqueadero & LugarParqueaderoRelations;
