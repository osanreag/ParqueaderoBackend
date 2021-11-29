import { Count, Filter, Where } from '@loopback/repository';
import { Cliente, Vehiculo } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteVehiculoController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: string, filter?: Filter<Vehiculo>): Promise<Vehiculo[]>;
    create(id: typeof Cliente.prototype.id, vehiculo: Omit<Vehiculo, 'id'>): Promise<Vehiculo>;
    patch(id: string, vehiculo: Partial<Vehiculo>, where?: Where<Vehiculo>): Promise<Count>;
    delete(id: string, where?: Where<Vehiculo>): Promise<Count>;
}
