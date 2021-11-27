import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {DuenoLoca} from './dueno-loca.model';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  estadovisual: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroSoat: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoVehiculo: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @belongsTo(() => DuenoLoca)
  duenoLocaId: string;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
