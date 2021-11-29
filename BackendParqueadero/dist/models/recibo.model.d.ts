import { Entity } from '@loopback/repository';
export declare class Recibo extends Entity {
    id?: string;
    fechaSalida: string;
    constructor(data?: Partial<Recibo>);
}
export interface ReciboRelations {
}
export declare type ReciboWithRelations = Recibo & ReciboRelations;
