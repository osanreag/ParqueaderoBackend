import { SolicitudPresencial, Recibo } from '../models';
import { SolicitudPresencialRepository } from '../repositories';
export declare class SolicitudPresencialReciboController {
    solicitudPresencialRepository: SolicitudPresencialRepository;
    constructor(solicitudPresencialRepository: SolicitudPresencialRepository);
    getRecibo(id: typeof SolicitudPresencial.prototype.id): Promise<Recibo>;
}
