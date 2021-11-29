import { Entity } from '@loopback/repository';
export declare class Vehiculo extends Entity {
    id?: string;
    placa: string;
    modelo: string;
    color: string;
    estadovisual: string;
    numeroSoat: string;
    tipoVehiculo: string;
    clienteId: string;
    duenoLocaId: string;
    constructor(data?: Partial<Vehiculo>);
}
export interface VehiculoRelations {
}
export declare type VehiculoWithRelations = Vehiculo & VehiculoRelations;
