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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalFormsController = void 0;
const common_1 = require("@nestjs/common");
const legal_forms_service_1 = require("./legal-forms.service");
const create_legal_form_dto_1 = require("./dto/create-legal-form.dto");
const update_legal_form_dto_1 = require("./dto/update-legal-form.dto");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
let LegalFormsController = class LegalFormsController {
    constructor(legalFormsService) {
        this.legalFormsService = legalFormsService;
    }
    async create(createLegalFormDto) {
        try {
            return await this.legalFormsService.create(createLegalFormDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.legalFormsService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.legalFormsService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateLegalFormDto) {
        try {
            return await this.legalFormsService.update(+id, updateLegalFormDto);
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            return await this.legalFormsService.remove(+id);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_legal_form_dto_1.CreateLegalFormDto]),
    __metadata("design:returntype", Promise)
], LegalFormsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LegalFormsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LegalFormsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_legal_form_dto_1.UpdateLegalFormDto]),
    __metadata("design:returntype", Promise)
], LegalFormsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LegalFormsController.prototype, "remove", null);
LegalFormsController = __decorate([
    (0, common_1.Controller)('legal-forms'),
    __metadata("design:paramtypes", [legal_forms_service_1.LegalFormsService])
], LegalFormsController);
exports.LegalFormsController = LegalFormsController;
//# sourceMappingURL=legal-forms.controller.js.map