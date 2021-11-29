import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SolicitudVirtual } from '../models';
import { SolicitudVirtualRepository } from '../repositories';
export declare class SolicitudVirtualController {
    solicitudVirtualRepository: SolicitudVirtualRepository;
    constructor(solicitudVirtualRepository: SolicitudVirtualRepository);
    create(solicitudVirtual: Omit<SolicitudVirtual, 'id'>): Promise<SolicitudVirtual>;
    count(where?: Where<SolicitudVirtual>): Promise<Count>;
    find(filter?: Filter<SolicitudVirtual>): Promise<SolicitudVirtual[]>;
    updateAll(solicitudVirtual: SolicitudVirtual, where?: Where<SolicitudVirtual>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<SolicitudVirtual>): Promise<SolicitudVirtual>;
    updateById(id: string, solicitudVirtual: SolicitudVirtual): Promise<void>;
    replaceById(id: string, solicitudVirtual: SolicitudVirtual): Promise<void>;
    deleteById(id: string): Promise<void>;
}
