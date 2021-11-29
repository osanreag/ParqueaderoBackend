import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Local } from '../models';
import { LocalRepository } from '../repositories';
export declare class LocalController {
    localRepository: LocalRepository;
    constructor(localRepository: LocalRepository);
    create(local: Omit<Local, 'id'>): Promise<Local>;
    count(where?: Where<Local>): Promise<Count>;
    find(filter?: Filter<Local>): Promise<Local[]>;
    updateAll(local: Local, where?: Where<Local>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Local>): Promise<Local>;
    updateById(id: string, local: Local): Promise<void>;
    replaceById(id: string, local: Local): Promise<void>;
    deleteById(id: string): Promise<void>;
}
