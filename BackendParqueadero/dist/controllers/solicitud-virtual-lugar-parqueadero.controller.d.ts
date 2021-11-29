import { Count, Filter, Where } from '@loopback/repository';
import { SolicitudVirtual, LugarParqueadero } from '../models';
import { SolicitudVirtualRepository } from '../repositories';
export declare class SolicitudVirtualLugarParqueaderoController {
    protected solicitudVirtualRepository: SolicitudVirtualRepository;
    constructor(solicitudVirtualRepository: SolicitudVirtualRepository);
    get(id: string, filter?: Filter<LugarParqueadero>): Promise<LugarParqueadero>;
    create(id: typeof SolicitudVirtual.prototype.id, lugarParqueadero: Omit<LugarParqueadero, 'id'>): Promise<LugarParqueadero>;
    patch(id: string, lugarParqueadero: Partial<LugarParqueadero>, where?: Where<LugarParqueadero>): Promise<Count>;
    delete(id: string, where?: Where<LugarParqueadero>): Promise<Count>;
}
