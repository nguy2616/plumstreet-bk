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
exports.SpecialDietsController = void 0;
const common_1 = require("@nestjs/common");
const special_diets_service_1 = require("./special-diets.service");
const create_special_diet_dto_1 = require("./dto/create-special-diet.dto");
const update_special_diet_dto_1 = require("./dto/update-special-diet.dto");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
let SpecialDietsController = class SpecialDietsController {
    constructor(specialDietsService) {
        this.specialDietsService = specialDietsService;
    }
    async create(createSpecialDietDto) {
        try {
            return await this.specialDietsService.create(createSpecialDietDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.specialDietsService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.specialDietsService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateSpecialDietDto) {
        try {
            return await this.specialDietsService.update(+id, updateSpecialDietDto);
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            return await this.specialDietsService.remove(+id);
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
    __metadata("design:paramtypes", [create_special_diet_dto_1.CreateSpecialDietDto]),
    __metadata("design:returntype", Promise)
], SpecialDietsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialDietsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialDietsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_special_diet_dto_1.UpdateSpecialDietDto]),
    __metadata("design:returntype", Promise)
], SpecialDietsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialDietsController.prototype, "remove", null);
SpecialDietsController = __decorate([
    (0, common_1.Controller)('special-diets'),
    __metadata("design:paramtypes", [special_diets_service_1.SpecialDietsService])
], SpecialDietsController);
exports.SpecialDietsController = SpecialDietsController;
//# sourceMappingURL=special-diets.controller.js.map