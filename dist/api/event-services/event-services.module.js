"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventServicesModule = void 0;
const common_1 = require("@nestjs/common");
const event_services_service_1 = require("./event-services.service");
const event_services_controller_1 = require("./event-services.controller");
const typeorm_1 = require("@nestjs/typeorm");
const event_service_entity_1 = require("./entities/event-service.entity");
let EventServicesModule = class EventServicesModule {
};
EventServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([event_service_entity_1.EventService])],
        controllers: [event_services_controller_1.EventServicesController],
        providers: [event_services_service_1.EventServicesService],
    })
], EventServicesModule);
exports.EventServicesModule = EventServicesModule;
//# sourceMappingURL=event-services.module.js.map