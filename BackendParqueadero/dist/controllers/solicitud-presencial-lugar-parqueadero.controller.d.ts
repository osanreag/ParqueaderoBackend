import { Count, Filter, Where } from '@loopback/repository';
import { SolicitudPresencial, LugarParqueadero } from '../models';
import { SolicitudPresencialRepository } from '../repositories';
export declare class SolicitudPresencialLugarParqueaderoController {
    protected solicitudPresencialRepository: SolicitudPresencialRepository;
    constructor(solicitudPresencialRepository: SolicitudPresencialRepository);
    get(id: string, filter?: Filter<LugarParqueadero>): Promise<LugarParqueadero>;
    create(id: typeof SolicitudPresencial.prototype.id, lugarParqueadero: Omit<LugarParqueadero, 'id'>): Promise<LugarParqueadero>;
    patch(id: string, lugarParqueadero: Partial<LugarParqueadero>, where?: Where<LugarParqueadero>): Promise<Count>;
    delete(id: string, where?: Where<LugarParqueadero>): Promise<Count>;
}
