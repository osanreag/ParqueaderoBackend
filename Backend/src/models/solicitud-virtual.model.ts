import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {LugarParqueadero} from './lugar-parqueadero.model';
import {Recibo} from './recibo.model';

@model()
export class SolicitudVirtual extends Entity {
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
    type: 'date',
    required: true,
  })
  fechaVisita: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;

  @property({
    type: 'string',
    required: true,
  })
  lugarparqueadero: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  @hasOne(() => LugarParqueadero)
  lugarParqueadero: LugarParqueadero;

  @belongsTo(() => Recibo)
  reciboId: string;

  constructor(data?: Partial<SolicitudVirtual>) {
    super(data);
  }
}

export interface SolicitudVirtualRelations {
  // describe navigational properties here
}

export type SolicitudVirtualWithRelations = SolicitudVirtual & SolicitudVirtualRelations;
