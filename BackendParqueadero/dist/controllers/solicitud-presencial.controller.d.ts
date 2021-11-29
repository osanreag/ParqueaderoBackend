import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SolicitudPresencial } from '../models';
import { SolicitudPresencialRepository } from '../repositories';
export declare class SolicitudPresencialController {
    solicitudPresencialRepository: SolicitudPresencialRepository;
    constructor(solicitudPresencialRepository: SolicitudPresencialRepository);
    create(solicitudPresencial: Omit<SolicitudPresencial, 'id'>): Promise<SolicitudPresencial>;
    count(where?: Where<SolicitudPresencial>): Promise<Count>;
    find(filter?: Filter<SolicitudPresencial>): Promise<SolicitudPresencial[]>;
    updateAll(solicitudPresencial: SolicitudPresencial, where?: Where<SolicitudPresencial>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<SolicitudPresencial>): Promise<SolicitudPresencial>;
    updateById(id: string, solicitudPresencial: SolicitudPresencial): Promise<void>;
    replaceById(id: string, solicitudPresencial: SolicitudPresencial): Promise<void>;
    deleteById(id: string): Promise<void>;
}
