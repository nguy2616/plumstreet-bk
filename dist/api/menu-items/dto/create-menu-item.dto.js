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
exports.CreateMenuItemDto = void 0;
const class_validator_1 = require("class-validator");
const cuisine_type_entity_1 = require("../../cuisine-types/entities/cuisine-type.entity");
const menu_item_group_entity_1 = require("../../menu-item-groups/entities/menu-item-group.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
const special_diet_entity_1 = require("../../special-diets/entities/special-diet.entity");
class CreateMenuItemDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMenuItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMenuItemDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", menu_item_group_entity_1.MenuItemGroup)
], CreateMenuItemDto.prototype, "menu_item_group", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", menu_entity_1.Menu)
], CreateMenuItemDto.prototype, "menu", void 0);
exports.CreateMenuItemDto = CreateMenuItemDto;
//# sourceMappingURL=create-menu-item.dto.js.map