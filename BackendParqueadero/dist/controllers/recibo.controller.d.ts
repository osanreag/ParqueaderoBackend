import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Recibo } from '../models';
import { ReciboRepository } from '../repositories';
export declare class ReciboController {
    reciboRepository: ReciboRepository;
    constructor(reciboRepository: ReciboRepository);
    create(recibo: Omit<Recibo, 'id'>): Promise<Recibo>;
    count(where?: Where<Recibo>): Promise<Count>;
    find(filter?: Filter<Recibo>): Promise<Recibo[]>;
    updateAll(recibo: Recibo, where?: Where<Recibo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Recibo>): Promise<Recibo>;
    updateById(id: string, recibo: Recibo): Promise<void>;
    replaceById(id: string, recibo: Recibo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
