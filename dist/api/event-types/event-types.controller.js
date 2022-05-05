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
exports.EventTypesController = void 0;
const common_1 = require("@nestjs/common");
const event_types_service_1 = require("./event-types.service");
const create_event_type_dto_1 = require("./dto/create-event-type.dto");
const update_event_type_dto_1 = require("./dto/update-event-type.dto");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
let EventTypesController = class EventTypesController {
    constructor(eventTypesService) {
        this.eventTypesService = eventTypesService;
    }
    create(createEventTypeDto) {
        try {
            return this.eventTypesService.create(createEventTypeDto);
        }
        catch (error) {
            return error;
        }
    }
    findAll() {
        try {
            return this.eventTypesService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    findOne(id) {
        try {
            return this.eventTypesService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    update(id, updateEventTypeDto) {
        try {
            return this.eventTypesService.update(+id, updateEventTypeDto);
        }
        catch (error) {
            return error;
        }
    }
    remove(id) {
        try {
            return this.eventTypesService.remove(+id);
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
    __metadata("design:paramtypes", [create_event_type_dto_1.CreateEventTypeDto]),
    __metadata("design:returntype", void 0)
], EventTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_type_dto_1.UpdateEventTypeDto]),
    __metadata("design:returntype", void 0)
], EventTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventTypesController.prototype, "remove", null);
EventTypesController = __decorate([
    (0, common_1.Controller)('event-types'),
    __metadata("design:paramtypes", [event_types_service_1.EventTypesService])
], EventTypesController);
exports.EventTypesController = EventTypesController;
//# sourceMappingURL=event-types.controller.js.map