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
exports.ClientEventController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
const client_event_service_1 = require("./client-event.service");
const create_client_event_dto_1 = require("./dto/create-client-event.dto");
const update_client_event_dto_1 = require("./dto/update-client-event.dto");
let ClientEventController = class ClientEventController {
    constructor(clientEventService) {
        this.clientEventService = clientEventService;
    }
    async create(createClientEventDto) {
        try {
            return await this.clientEventService.create(createClientEventDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return this.clientEventService.findAll();
        }
        catch (error) { }
    }
    async findOne(id) {
        try {
            return this.clientEventService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    update(id, updateClientEventDto) {
        try {
            return this.clientEventService.update(id, updateClientEventDto);
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            return this.clientEventService.remove(+id);
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
    __metadata("design:paramtypes", [create_client_event_dto_1.CreateClientEventDto]),
    __metadata("design:returntype", Promise)
], ClientEventController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientEventController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientEventController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_client_event_dto_1.UpdateClientEventDto]),
    __metadata("design:returntype", void 0)
], ClientEventController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientEventController.prototype, "remove", null);
ClientEventController = __decorate([
    (0, common_1.Controller)('client-events'),
    __metadata("design:paramtypes", [client_event_service_1.ClientEventService])
], ClientEventController);
exports.ClientEventController = ClientEventController;
//# sourceMappingURL=client-event.controller.js.map