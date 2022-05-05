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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEvent = void 0;
const typeorm_1 = require("typeorm");
const cuisine_type_entity_1 = require("../../cuisine-types/entities/cuisine-type.entity");
const event_service_entity_1 = require("../../event-services/entities/event-service.entity");
const event_type_entity_1 = require("../../event-types/entities/event-type.entity");
const menu_item_group_entity_1 = require("../../menu-item-groups/entities/menu-item-group.entity");
const menu_item_entity_1 = require("../../menu-items/entities/menu-item.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let ClientEvent = class ClientEvent {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClientEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ClientEvent.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_type_entity_1.EventType, {
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", event_type_entity_1.EventType)
], ClientEvent.prototype, "event_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], ClientEvent.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ClientEvent.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ClientEvent.prototype, "guests", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ClientEvent.prototype, "location_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ClientEvent.prototype, "other", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cuisine_type_entity_1.CuisineType, (cuisine_type) => cuisine_type.events, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ClientEvent.prototype, "cuisine_types", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, {
        nullable: false,
        eager: true,
    }),
    __metadata("design:type", user_entity_1.User)
], ClientEvent.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => event_service_entity_1.EventService, (service) => service.events, {
        nullable: false,
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ClientEvent.prototype, "services", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_item_group_entity_1.MenuItemGroup, (offer) => offer.events, {
        nullable: false,
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ClientEvent.prototype, "offers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_entity_1.Menu, (menu) => menu.events, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)({ name: 'event-fav_menus' }),
    __metadata("design:type", Array)
], ClientEvent.prototype, "fav_menus", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_item_entity_1.MenuItem, (menu_item) => menu_item.events, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)({ name: 'event-fav_items' }),
    __metadata("design:type", Array)
], ClientEvent.prototype, "fav_menu_items", void 0);
ClientEvent = __decorate([
    (0, typeorm_1.Entity)('client_events')
], ClientEvent);
exports.ClientEvent = ClientEvent;
//# sourceMappingURL=client-event.entity.js.map