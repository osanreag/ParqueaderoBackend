import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Local} from './local.model';
import {SolicitudPresencial} from './solicitud-presencial.model';
import {Vehiculo} from './vehiculo.model';

@model()
export class DuenoLoca extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @hasMany(() => Local)
  locals: Local[];

  @hasOne(() => SolicitudPresencial)
  solicitudPresencial: SolicitudPresencial;

  @hasOne(() => Vehiculo)
  vehiculo: Vehiculo;

  constructor(data?: Partial<DuenoLoca>) {
    super(data);
  }
}

export interface DuenoLocaRelations {
  // describe navigational properties here
}

export type DuenoLocaWithRelations = DuenoLoca & DuenoLocaRelations;
