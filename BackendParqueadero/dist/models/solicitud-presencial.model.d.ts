import { Entity } from '@loopback/repository';
import { LugarParqueadero } from './lugar-parqueadero.model';
export declare class SolicitudPresencial extends Entity {
    id?: string;
    fechaVisita: string;
    identificacion: string;
    duenoLocaId: string;
    lugarParqueadero: LugarParqueadero;
    reciboId: string;
    constructor(data?: Partial<SolicitudPresencial>);
}
export interface SolicitudPresencialRelations {
}
export declare type SolicitudPresencialWithRelations = SolicitudPresencial & SolicitudPresencialRelations;
