import { Entity } from '@loopback/repository';
import { LugarParqueadero } from './lugar-parqueadero.model';
export declare class SolicitudVirtual extends Entity {
    id?: string;
    placa: string;
    fechaVisita: string;
    identificacion: string;
    lugarparqueadero: string;
    clienteId: string;
    lugarParqueadero: LugarParqueadero;
    reciboId: string;
    constructor(data?: Partial<SolicitudVirtual>);
}
export interface SolicitudVirtualRelations {
}
export declare type SolicitudVirtualWithRelations = SolicitudVirtual & SolicitudVirtualRelations;
