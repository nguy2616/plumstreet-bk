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
exports.EventServicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notFound_exception_1 = require("../../utils/notFound.exception");
const event_service_entity_1 = require("./entities/event-service.entity");
let EventServicesService = class EventServicesService {
    constructor(eventServicesRepository) {
        this.eventServicesRepository = eventServicesRepository;
    }
    async create(createEventServiceDto) {
        const cs = await this.eventServicesRepository.create(createEventServiceDto);
        if (cs) {
            await this.eventServicesRepository.save(cs);
            return cs;
        }
    }
    async findAll() {
        const eventservices = await this.eventServicesRepository.find();
        return eventservices;
    }
    async findOne(id) {
        const cs = await this.eventServicesRepository.findOne(id);
        if (cs) {
            return cs;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateEventServiceDto) {
        const update = await this.eventServicesRepository.update(id, updateEventServiceDto);
        if (update) {
            return await this.findOne(id);
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        if (await this.eventServicesRepository.delete(id)) {
            return `This action removes a #${id} eventService`;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
};
EventServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_service_entity_1.EventService)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventServicesService);
exports.EventServicesService = EventServicesService;
//# sourceMappingURL=event-services.service.js.map