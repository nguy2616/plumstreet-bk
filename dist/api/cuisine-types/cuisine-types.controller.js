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
exports.CuisineTypesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
const cuisine_types_service_1 = require("./cuisine-types.service");
const create_cuisine_type_dto_1 = require("./dto/create-cuisine-type.dto");
const update_cuisine_type_dto_1 = require("./dto/update-cuisine-type.dto");
let CuisineTypesController = class CuisineTypesController {
    constructor(cuisineTypesService) {
        this.cuisineTypesService = cuisineTypesService;
    }
    create(createCuisineTypeDto) {
        try {
            return this.cuisineTypesService.create(createCuisineTypeDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.cuisineTypesService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.cuisineTypesService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateCuisineTypeDto) {
        try {
            return await this.cuisineTypesService.update(+id, updateCuisineTypeDto);
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            return await this.cuisineTypesService.remove(+id);
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
    __metadata("design:paramtypes", [create_cuisine_type_dto_1.CreateCuisineTypeDto]),
    __metadata("design:returntype", void 0)
], CuisineTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CuisineTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CuisineTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cuisine_type_dto_1.UpdateCuisineTypeDto]),
    __metadata("design:returntype", Promise)
], CuisineTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CuisineTypesController.prototype, "remove", null);
CuisineTypesController = __decorate([
    (0, common_1.Controller)('cuisine-types'),
    __metadata("design:paramtypes", [cuisine_types_service_1.CuisineTypesService])
], CuisineTypesController);
exports.CuisineTypesController = CuisineTypesController;
//# sourceMappingURL=cuisine-types.controller.js.map