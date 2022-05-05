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
exports.Foodtruck = void 0;
const typeorm_1 = require("typeorm");
const genetic_entity_1 = require("../../../utils/genetic.entity");
const company_entity_1 = require("../../companies/entities/company.entity");
const file_entity_1 = require("../../files/entities/file.entity");
let Foodtruck = class Foodtruck extends genetic_entity_1.Genetic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Foodtruck.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Foodtruck.prototype, "carModel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Foodtruck.prototype, "carID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Foodtruck.prototype, "length", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Foodtruck.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Foodtruck.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Foodtruck.prototype, "amperage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Foodtruck.prototype, "other", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", file_entity_1.File)
], Foodtruck.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, {
        eager: true,
        nullable: false,
    }),
    __metadata("design:type", company_entity_1.Company)
], Foodtruck.prototype, "company", void 0);
Foodtruck = __decorate([
    (0, typeorm_1.Entity)('foodtrucks')
], Foodtruck);
exports.Foodtruck = Foodtruck;
//# sourceMappingURL=foodtruck.entity.js.map