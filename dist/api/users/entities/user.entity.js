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
exports.User = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const genetic_entity_1 = require("../../../utils/genetic.entity");
const client_event_entity_1 = require("../../client-event/entities/client-event.entity");
const company_entity_1 = require("../../companies/entities/company.entity");
const file_entity_1 = require("../../files/entities/file.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
let User = class User extends genetic_entity_1.Genetic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => file_entity_1.File, {
        nullable: true,
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", file_entity_1.File)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, {
        eager: true,
    }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (company) => company.contacts, {
        eager: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => client_event_entity_1.ClientEvent, (event) => event.client, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "events", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map