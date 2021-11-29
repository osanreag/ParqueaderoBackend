import { Count, Filter, Where } from '@loopback/repository';
import { DuenoLoca, SolicitudPresencial } from '../models';
import { DuenoLocaRepository } from '../repositories';
export declare class DuenoLocaSolicitudPresencialController {
    protected duenoLocaRepository: DuenoLocaRepository;
    constructor(duenoLocaRepository: DuenoLocaRepository);
    get(id: string, filter?: Filter<SolicitudPresencial>): Promise<SolicitudPresencial>;
    create(id: typeof DuenoLoca.prototype.id, solicitudPresencial: Omit<SolicitudPresencial, 'id'>): Promise<SolicitudPresencial>;
    patch(id: string, solicitudPresencial: Partial<SolicitudPresencial>, where?: Where<SolicitudPresencial>): Promise<Count>;
    delete(id: string, where?: Where<SolicitudPresencial>): Promise<Count>;
}
