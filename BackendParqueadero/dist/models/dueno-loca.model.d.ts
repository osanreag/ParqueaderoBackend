import { Entity } from '@loopback/repository';
import { Local } from './local.model';
import { SolicitudPresencial } from './solicitud-presencial.model';
import { Vehiculo } from './vehiculo.model';
export declare class DuenoLoca extends Entity {
    id?: string;
    nombre: string;
    identificacion: string;
    telefono: string;
    locals: Local[];
    solicitudPresencial: SolicitudPresencial;
    vehiculo: Vehiculo;
    constructor(data?: Partial<DuenoLoca>);
}
export interface DuenoLocaRelations {
}
export declare type DuenoLocaWithRelations = DuenoLoca & DuenoLocaRelations;
