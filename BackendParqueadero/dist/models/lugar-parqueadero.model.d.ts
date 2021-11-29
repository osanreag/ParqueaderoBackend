import { Entity } from '@loopback/repository';
export declare class LugarParqueadero extends Entity {
    id?: string;
    estado: boolean;
    numeroLugar: number;
    tipoEspacio: string;
    solicitudPresencialId?: string;
    solicitudVirtualId?: string;
    constructor(data?: Partial<LugarParqueadero>);
}
export interface LugarParqueaderoRelations {
}
export declare type LugarParqueaderoWithRelations = LugarParqueadero & LugarParqueaderoRelations;
