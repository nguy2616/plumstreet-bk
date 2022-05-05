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
exports.CreateMenuDto = void 0;
const class_validator_1 = require("class-validator");
const company_entity_1 = require("../../companies/entities/company.entity");
const cuisine_type_entity_1 = require("../../cuisine-types/entities/cuisine-type.entity");
const menu_item_entity_1 = require("../../menu-items/entities/menu-item.entity");
const special_diet_entity_1 = require("../../special-diets/entities/special-diet.entity");
class CreateMenuDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMenuDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", company_entity_1.Company)
], CreateMenuDto.prototype, "company", void 0);
exports.CreateMenuDto = CreateMenuDto;
//# sourceMappingURL=create-menu.dto.js.map