"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const llaves_1 = require("../config/llaves");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const fetch = require("node-fetch");
let ClienteController = class ClienteController {
    constructor(clienteRepository, servicioAutenticacion) {
        this.clienteRepository = clienteRepository;
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async identificarCliente(credenciales) {
        let p = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.clave);
        if (p) {
            let token = this.servicioAutenticacion.GenerarTokenJWT(p);
            return {
                datos: {
                    nombre: p.nombre,
                    correo: p.correo,
                    id: p.id
                },
                tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Datos invalidos");
        }
    }
    async create(cliente) {
        let clave = this.servicioAutenticacion.GenerarClave();
        let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
        cliente.contrasena = claveCifrada;
        let p = await this.clienteRepository.create(cliente);
        //Notificar al cliente 
        let destino = cliente.correo;
        let asunto = 'Registro en la plataforma';
        let contenido = `Hola ${cliente.nombre}, su nombre de usuario es ${cliente.correo} y su contraseña es: ${clave}`;
        fetch(`${llaves_1.Llaves.urlServicioNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
            .then((data) => {
            console.log(data);
        });
        return p;
    }
    async count(where) {
        return this.clienteRepository.count(where);
    }
    async find(filter) {
        return this.clienteRepository.find(filter);
    }
    async updateAll(cliente, where) {
        return this.clienteRepository.updateAll(cliente, where);
    }
    async findById(id, filter) {
        return this.clienteRepository.findById(id, filter);
    }
    async updateById(id, cliente) {
        await this.clienteRepository.updateById(id, cliente);
    }
    async replaceById(id, cliente) {
        await this.clienteRepository.replaceById(id, cliente);
    }
    async deleteById(id) {
        await this.clienteRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)("/identificarCliente", {
        responses: {
            '200': {
                description: "Identificacion de usuarios"
            }
        }
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "identificarCliente", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, {
                    title: 'NewCliente',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/count'),
    (0, rest_1.response)(200, {
        description: 'Cliente model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Cliente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Array of Cliente model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Cliente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/clientes'),
    (0, rest_1.response)(200, {
        description: 'Cliente PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Cliente)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Cliente, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/clientes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cliente model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Cliente, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Cliente]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Cliente]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/clientes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cliente DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ClienteController.prototype, "deleteById", null);
ClienteController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ClienteRepository)),
    (0, tslib_1.__param)(1, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ClienteRepository,
        services_1.AutenticacionService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map