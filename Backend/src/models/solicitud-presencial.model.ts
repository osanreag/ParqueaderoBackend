import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {DuenoLoca} from './dueno-loca.model';
import {LugarParqueadero} from './lugar-parqueadero.model';
import {Recibo} from './recibo.model';

@model()
export class SolicitudPresencial extends Entity {
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
  fechaVisita: string;

  @property({
    type: 'string',
    required: true,
  })
  identificacion: string;
  @belongsTo(() => DuenoLoca)
  duenoLocaId: string;

  @hasOne(() => LugarParqueadero)
  lugarParqueadero: LugarParqueadero;

  @belongsTo(() => Recibo)
  reciboId: string;

  constructor(data?: Partial<SolicitudPresencial>) {
    super(data);
  }
}

export interface SolicitudPresencialRelations {
  // describe navigational properties here
}

export type SolicitudPresencialWithRelations = SolicitudPresencial & SolicitudPresencialRelations;
