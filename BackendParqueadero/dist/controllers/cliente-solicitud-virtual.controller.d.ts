import { Count, Filter, Where } from '@loopback/repository';
import { Cliente, SolicitudVirtual } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteSolicitudVirtualController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: string, filter?: Filter<SolicitudVirtual>): Promise<SolicitudVirtual[]>;
    create(id: typeof Cliente.prototype.id, solicitudVirtual: Omit<SolicitudVirtual, 'id'>): Promise<SolicitudVirtual>;
    patch(id: string, solicitudVirtual: Partial<SolicitudVirtual>, where?: Where<SolicitudVirtual>): Promise<Count>;
    delete(id: string, where?: Where<SolicitudVirtual>): Promise<Count>;
}
