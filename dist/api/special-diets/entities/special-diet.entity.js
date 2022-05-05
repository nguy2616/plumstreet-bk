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
exports.SpecialDiet = void 0;
const typeorm_1 = require("typeorm");
const genetic_entity_1 = require("../../../utils/genetic.entity");
const menu_item_entity_1 = require("../../menu-items/entities/menu-item.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
let SpecialDiet = class SpecialDiet extends genetic_entity_1.Genetic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SpecialDiet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], SpecialDiet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_entity_1.Menu, (menu) => menu.special_diets),
    __metadata("design:type", Array)
], SpecialDiet.prototype, "menus", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_item_entity_1.MenuItem, (menu_item) => menu_item.special_diets),
    __metadata("design:type", Array)
], SpecialDiet.prototype, "menu_items", void 0);
SpecialDiet = __decorate([
    (0, typeorm_1.Entity)('special_diets')
], SpecialDiet);
exports.SpecialDiet = SpecialDiet;
//# sourceMappingURL=special-diet.entity.js.map