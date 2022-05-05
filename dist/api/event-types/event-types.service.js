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
exports.EventTypesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notFound_exception_1 = require("../../utils/notFound.exception");
const event_type_entity_1 = require("./entities/event-type.entity");
let EventTypesService = class EventTypesService {
    constructor(eventTypesRepository) {
        this.eventTypesRepository = eventTypesRepository;
    }
    async create(createEventTypeDto) {
        const cs = await this.eventTypesRepository.create(createEventTypeDto);
        if (cs) {
            await this.eventTypesRepository.save(cs);
            return cs;
        }
    }
    async findAll() {
        const eventtypes = await this.eventTypesRepository.find();
        return eventtypes;
    }
    async findOne(id) {
        const cs = await this.eventTypesRepository.findOne(id);
        if (cs) {
            return cs;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateEventTypeDto) {
        const update = await this.eventTypesRepository.update(id, updateEventTypeDto);
        if (update) {
            return await this.findOne(id);
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        if (await this.eventTypesRepository.delete(id)) {
            return `This action removes a #${id} eventType`;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
};
EventTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_type_entity_1.EventType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventTypesService);
exports.EventTypesService = EventTypesService;
//# sourceMappingURL=event-types.service.js.map