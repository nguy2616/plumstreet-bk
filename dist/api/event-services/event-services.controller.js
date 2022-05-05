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
exports.EventServicesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
const event_services_service_1 = require("./event-services.service");
const create_event_service_dto_1 = require("./dto/create-event-service.dto");
const update_event_service_dto_1 = require("./dto/update-event-service.dto");
let EventServicesController = class EventServicesController {
    constructor(eventServicesService) {
        this.eventServicesService = eventServicesService;
    }
    create(createEventServiceDto) {
        try {
            return this.eventServicesService.create(createEventServiceDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.eventServicesService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.eventServicesService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateEventServiceDto) {
        try {
            return await this.eventServicesService.update(+id, updateEventServiceDto);
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            return await this.eventServicesService.remove(+id);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_service_dto_1.CreateEventServiceDto]),
    __metadata("design:returntype", void 0)
], EventServicesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventServicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventServicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_service_dto_1.UpdateEventServiceDto]),
    __metadata("design:returntype", Promise)
], EventServicesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventServicesController.prototype, "remove", null);
EventServicesController = __decorate([
    (0, common_1.Controller)('event-services'),
    __metadata("design:paramtypes", [event_services_service_1.EventServicesService])
], EventServicesController);
exports.EventServicesController = EventServicesController;
//# sourceMappingURL=event-services.controller.js.map