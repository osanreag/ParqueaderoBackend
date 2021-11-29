import { Local, DuenoLoca } from '../models';
import { LocalRepository } from '../repositories';
export declare class LocalDuenoLocaController {
    localRepository: LocalRepository;
    constructor(localRepository: LocalRepository);
    getDuenoLoca(id: typeof Local.prototype.id): Promise<DuenoLoca>;
}
