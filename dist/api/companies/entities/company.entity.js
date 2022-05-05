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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const genetic_entity_1 = require("../../../utils/genetic.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const cuisine_type_entity_1 = require("../../cuisine-types/entities/cuisine-type.entity");
const foodtruck_entity_1 = require("../../foodtrucks/entities/foodtruck.entity");
const legal_form_entity_1 = require("../../legal-forms/entities/legal-form.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Company = class Company extends genetic_entity_1.Genetic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "zip", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "bankAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "bankZip", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "bankCity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "bankCountry", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "IBAN", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, {
        eager: true,
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", category_entity_1.Category)
], Company.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => legal_form_entity_1.LegalForm, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", legal_form_entity_1.LegalForm)
], Company.prototype, "legalForm", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (contact) => contact.company, {
        nullable: false,
        cascade: true,
    }),
    __metadata("design:type", Array)
], Company.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => foodtruck_entity_1.Foodtruck, (foodtruck) => foodtruck.company, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Company.prototype, "foodtrucks", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cuisine_type_entity_1.CuisineType, (cuisine_type) => cuisine_type.companies, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Company.prototype, "cuisine_types", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => menu_entity_1.Menu, (menu) => menu.company, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Company.prototype, "menus", void 0);
Company = __decorate([
    (0, typeorm_1.Entity)('companies')
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map