import { SolicitudPresencial, DuenoLoca } from '../models';
import { SolicitudPresencialRepository } from '../repositories';
export declare class SolicitudPresencialDuenoLocaController {
    solicitudPresencialRepository: SolicitudPresencialRepository;
    constructor(solicitudPresencialRepository: SolicitudPresencialRepository);
    getDuenoLoca(id: typeof SolicitudPresencial.prototype.id): Promise<DuenoLoca>;
}
