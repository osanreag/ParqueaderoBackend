import { Entity } from '@loopback/repository';
import { Vehiculo } from './vehiculo.model';
import { SolicitudVirtual } from './solicitud-virtual.model';
export declare class Cliente extends Entity {
    id?: string;
    nombre: string;
    identificacion: string;
    telefono: string;
    direccion: string;
    correo: string;
    contrasena: string;
    vehiculos: Vehiculo[];
    solicitudVirtuals: SolicitudVirtual[];
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
