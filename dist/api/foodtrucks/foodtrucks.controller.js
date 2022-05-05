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
exports.FoodtrucksController = void 0;
const common_1 = require("@nestjs/common");
const foodtrucks_service_1 = require("./foodtrucks.service");
const create_foodtruck_dto_1 = require("./dto/create-foodtruck.dto");
const update_foodtruck_dto_1 = require("./dto/update-foodtruck.dto");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
let FoodtrucksController = class FoodtrucksController {
    constructor(foodtrucksService) {
        this.foodtrucksService = foodtrucksService;
    }
    create(createFoodtruckDto) {
        try {
            return this.foodtrucksService.create(createFoodtruckDto);
        }
        catch (error) {
            return error;
        }
    }
    findAll() {
        try {
            return this.foodtrucksService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    findOne(id) {
        try {
            return this.foodtrucksService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    update(id, updateFoodtruckDto) {
        try {
            return this.foodtrucksService.update(+id, updateFoodtruckDto);
        }
        catch (error) {
            return error;
        }
    }
    remove(id) {
        try {
            return this.foodtrucksService.remove(+id);
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
    __metadata("design:paramtypes", [create_foodtruck_dto_1.CreateFoodtruckDto]),
    __metadata("design:returntype", void 0)
], FoodtrucksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FoodtrucksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FoodtrucksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_foodtruck_dto_1.UpdateFoodtruckDto]),
    __metadata("design:returntype", void 0)
], FoodtrucksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FoodtrucksController.prototype, "remove", null);
FoodtrucksController = __decorate([
    (0, common_1.Controller)('foodtrucks'),
    __metadata("design:paramtypes", [foodtrucks_service_1.FoodtrucksService])
], FoodtrucksController);
exports.FoodtrucksController = FoodtrucksController;
//# sourceMappingURL=foodtrucks.controller.js.map