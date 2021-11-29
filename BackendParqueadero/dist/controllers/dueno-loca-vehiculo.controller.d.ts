import { Count, Filter, Where } from '@loopback/repository';
import { DuenoLoca, Vehiculo } from '../models';
import { DuenoLocaRepository } from '../repositories';
export declare class DuenoLocaVehiculoController {
    protected duenoLocaRepository: DuenoLocaRepository;
    constructor(duenoLocaRepository: DuenoLocaRepository);
    get(id: string, filter?: Filter<Vehiculo>): Promise<Vehiculo>;
    create(id: typeof DuenoLoca.prototype.id, vehiculo: Omit<Vehiculo, 'id'>): Promise<Vehiculo>;
    patch(id: string, vehiculo: Partial<Vehiculo>, where?: Where<Vehiculo>): Promise<Count>;
    delete(id: string, where?: Where<Vehiculo>): Promise<Count>;
}
