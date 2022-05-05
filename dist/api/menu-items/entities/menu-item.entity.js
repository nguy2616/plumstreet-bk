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
exports.MenuItem = void 0;
const typeorm_1 = require("typeorm");
const genetic_entity_1 = require("../../../utils/genetic.entity");
const client_event_entity_1 = require("../../client-event/entities/client-event.entity");
const cuisine_type_entity_1 = require("../../cuisine-types/entities/cuisine-type.entity");
const file_entity_1 = require("../../files/entities/file.entity");
const menu_item_group_entity_1 = require("../../menu-item-groups/entities/menu-item-group.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
const special_diet_entity_1 = require("../../special-diets/entities/special-diet.entity");
let MenuItem = class MenuItem extends genetic_entity_1.Genetic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MenuItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], MenuItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MenuItem.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], MenuItem.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.File, (image) => image.menu_item, {
        eager: true,
        cascade: true,
    }),
    __metadata("design:type", Array)
], MenuItem.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_item_group_entity_1.MenuItemGroup, (menu_item_group) => menu_item_group.menu_items, {
        nullable: false,
        eager: true,
    }),
    __metadata("design:type", menu_item_group_entity_1.MenuItemGroup)
], MenuItem.prototype, "menu_item_group", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cuisine_type_entity_1.CuisineType, (cuisine_type) => cuisine_type.menu_items, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], MenuItem.prototype, "cuisine_types", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => special_diet_entity_1.SpecialDiet, (special_diet) => special_diet.menu_items, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], MenuItem.prototype, "special_diets", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.Menu, {
        nullable: false,
    }),
    __metadata("design:type", Object)
], MenuItem.prototype, "menu", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => client_event_entity_1.ClientEvent),
    __metadata("design:type", Array)
], MenuItem.prototype, "events", void 0);
MenuItem = __decorate([
    (0, typeorm_1.Entity)('menu_items')
], MenuItem);
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu-item.entity.js.map