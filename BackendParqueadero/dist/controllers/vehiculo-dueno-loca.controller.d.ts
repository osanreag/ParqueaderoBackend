import { Vehiculo, DuenoLoca } from '../models';
import { VehiculoRepository } from '../repositories';
export declare class VehiculoDuenoLocaController {
    vehiculoRepository: VehiculoRepository;
    constructor(vehiculoRepository: VehiculoRepository);
    getDuenoLoca(id: typeof Vehiculo.prototype.id): Promise<DuenoLoca>;
}
