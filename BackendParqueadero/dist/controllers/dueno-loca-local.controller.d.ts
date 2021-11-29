import { Count, Filter, Where } from '@loopback/repository';
import { DuenoLoca, Local } from '../models';
import { DuenoLocaRepository } from '../repositories';
export declare class DuenoLocaLocalController {
    protected duenoLocaRepository: DuenoLocaRepository;
    constructor(duenoLocaRepository: DuenoLocaRepository);
    find(id: string, filter?: Filter<Local>): Promise<Local[]>;
    create(id: typeof DuenoLoca.prototype.id, local: Omit<Local, 'id'>): Promise<Local>;
    patch(id: string, local: Partial<Local>, where?: Where<Local>): Promise<Count>;
    delete(id: string, where?: Where<Local>): Promise<Count>;
}
