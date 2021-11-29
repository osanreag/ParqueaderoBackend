import { Vehiculo, Cliente } from '../models';
import { VehiculoRepository } from '../repositories';
export declare class VehiculoClienteController {
    vehiculoRepository: VehiculoRepository;
    constructor(vehiculoRepository: VehiculoRepository);
    getCliente(id: typeof Vehiculo.prototype.id): Promise<Cliente>;
}
