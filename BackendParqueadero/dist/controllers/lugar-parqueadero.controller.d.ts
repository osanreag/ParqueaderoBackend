import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { LugarParqueadero } from '../models';
import { LugarParqueaderoRepository } from '../repositories';
export declare class LugarParqueaderoController {
    lugarParqueaderoRepository: LugarParqueaderoRepository;
    constructor(lugarParqueaderoRepository: LugarParqueaderoRepository);
    create(lugarParqueadero: Omit<LugarParqueadero, 'id'>): Promise<LugarParqueadero>;
    count(where?: Where<LugarParqueadero>): Promise<Count>;
    find(filter?: Filter<LugarParqueadero>): Promise<LugarParqueadero[]>;
    updateAll(lugarParqueadero: LugarParqueadero, where?: Where<LugarParqueadero>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<LugarParqueadero>): Promise<LugarParqueadero>;
    updateById(id: string, lugarParqueadero: LugarParqueadero): Promise<void>;
    replaceById(id: string, lugarParqueadero: LugarParqueadero): Promise<void>;
    deleteById(id: string): Promise<void>;
}
