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
exports.Menu = void 0;
const typeorm_1 = require("typeorm");
const genetic_entity_1 = require("../../../utils/genetic.entity");
const client_event_entity_1 = require("../../client-event/entities/client-event.entity");
const comment_entity_1 = require("../../comments/entities/comment.entity");
const company_entity_1 = require("../../companies/entities/company.entity");
const cuisine_type_entity_1 = require("../../cuisine-types/entities/cuisine-type.entity");
const file_entity_1 = require("../../files/entities/file.entity");
const menu_item_entity_1 = require("../../menu-items/entities/menu-item.entity");
const special_diet_entity_1 = require("../../special-diets/entities/special-diet.entity");
let Menu = class Menu extends genetic_entity_1.Genetic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Menu.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
    }),
    __metadata("design:type", String)
], Menu.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Menu.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Menu.prototype, "isStandard", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => file_entity_1.File, (image) => image.menu, {
        eager: true,
        onDelete: 'CASCADE',
        nullable: true,
    }),
    __metadata("design:type", Array)
], Menu.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cuisine_type_entity_1.CuisineType, (cuisine_type) => cuisine_type.menus, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Menu.prototype, "cuisine_types", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => special_diet_entity_1.SpecialDiet, (special_diet) => special_diet.menus, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Menu.prototype, "special_diets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => menu_item_entity_1.MenuItem, (menu_item) => menu_item.menu, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Menu.prototype, "menu_items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.menu, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Menu.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => client_event_entity_1.ClientEvent),
    __metadata("design:type", Array)
], Menu.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, {
        nullable: false,
        eager: true,
    }),
    __metadata("design:type", company_entity_1.Company)
], Menu.prototype, "company", void 0);
Menu = __decorate([
    (0, typeorm_1.Entity)('menus')
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.entity.js.map