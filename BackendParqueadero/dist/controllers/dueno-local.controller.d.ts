import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DuenoLoca } from '../models';
import { DuenoLocaRepository } from '../repositories';
export declare class DuenoLocalController {
    duenoLocaRepository: DuenoLocaRepository;
    constructor(duenoLocaRepository: DuenoLocaRepository);
    create(duenoLoca: Omit<DuenoLoca, 'id'>): Promise<DuenoLoca>;
    count(where?: Where<DuenoLoca>): Promise<Count>;
    find(filter?: Filter<DuenoLoca>): Promise<DuenoLoca[]>;
    updateAll(duenoLoca: DuenoLoca, where?: Where<DuenoLoca>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<DuenoLoca>): Promise<DuenoLoca>;
    updateById(id: string, duenoLoca: DuenoLoca): Promise<void>;
    replaceById(id: string, duenoLoca: DuenoLoca): Promise<void>;
    deleteById(id: string): Promise<void>;
}
