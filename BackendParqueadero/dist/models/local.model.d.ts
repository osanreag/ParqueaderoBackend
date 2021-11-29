import { Entity } from '@loopback/repository';
export declare class Local extends Entity {
    id?: string;
    nombre: string;
    referenciaComercial: string;
    anoCreacion: string;
    ubicacion: string;
    duenoLocaId: string;
    constructor(data?: Partial<Local>);
}
export interface LocalRelations {
}
export declare type LocalWithRelations = Local & LocalRelations;
