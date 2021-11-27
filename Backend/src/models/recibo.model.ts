import {Entity, model, property} from '@loopback/repository';

@model()
export class Recibo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaSalida: string;


  constructor(data?: Partial<Recibo>) {
    super(data);
  }
}

export interface ReciboRelations {
  // describe navigational properties here
}

export type ReciboWithRelations = Recibo & ReciboRelations;
