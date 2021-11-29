import { SolicitudVirtual, Cliente } from '../models';
import { SolicitudVirtualRepository } from '../repositories';
export declare class SolicitudVirtualClienteController {
    solicitudVirtualRepository: SolicitudVirtualRepository;
    constructor(solicitudVirtualRepository: SolicitudVirtualRepository);
    getCliente(id: typeof SolicitudVirtual.prototype.id): Promise<Cliente>;
}
