import { Cliente } from '../models';
import { ClienteRepository } from '../repositories';
export declare class AutenticacionService {
    clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    GenerarClave(): any;
    CifrarClave(clave: string): any;
    IdentificarPersona(usuario: string, clave: string): false | Promise<(Cliente & import("../models").ClienteRelations) | null>;
    GenerarTokenJWT(cliente: Cliente): any;
    ValidarTokenJWT(token: string): false | undefined;
}
