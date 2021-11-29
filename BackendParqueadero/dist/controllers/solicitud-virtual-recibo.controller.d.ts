import { SolicitudVirtual, Recibo } from '../models';
import { SolicitudVirtualRepository } from '../repositories';
export declare class SolicitudVirtualReciboController {
    solicitudVirtualRepository: SolicitudVirtualRepository;
    constructor(solicitudVirtualRepository: SolicitudVirtualRepository);
    getRecibo(id: typeof SolicitudVirtual.prototype.id): Promise<Recibo>;
}
