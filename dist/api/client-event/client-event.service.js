"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notFound_exception_1 = require("../../utils/notFound.exception");
const client_event_entity_1 = require("./entities/client-event.entity");
let ClientEventService = class ClientEventService {
    constructor(eventsRepository) {
        this.eventsRepository = eventsRepository;
    }
    async create(createClientEventDto) {
        const ev = await this.eventsRepository.create({
            ...createClientEventDto,
            event_type: createClientEventDto.event_type,
            cuisine_types: createClientEventDto.cuisine_types
                ? createClientEventDto.cuisine_types
                : [],
            client: createClientEventDto.client,
            services: createClientEventDto.services,
            offers: createClientEventDto.offers,
            fav_menus: createClientEventDto.fav_menus
                ? createClientEventDto.fav_menus
                : [],
            fav_menu_items: createClientEventDto.fav_menu_items
                ? createClientEventDto.fav_menu_items
                : [],
        });
        if (ev) {
            await this.eventsRepository.save(ev);
        }
        return ev;
    }
    async findAll() {
        const evs = await this.eventsRepository.find();
        return evs;
    }
    async findOne(id) {
        const ev = await this.eventsRepository.findOne(id);
        if (ev) {
            return ev;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateClientEventDto) {
        updateClientEventDto.id = Number(id);
        const update = await this.eventsRepository.save(updateClientEventDto);
        if (update) {
            const ev = await this.findOne(id);
            return ev;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        if (await this.eventsRepository.delete(id)) {
            return `Delete event ${id} succesfully!`;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
};
ClientEventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_event_entity_1.ClientEvent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientEventService);
exports.ClientEventService = ClientEventService;
//# sourceMappingURL=client-event.service.js.map