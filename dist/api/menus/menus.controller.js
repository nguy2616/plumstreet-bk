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
exports.MenusController = void 0;
const common_1 = require("@nestjs/common");
const menus_service_1 = require("./menus.service");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const update_menu_dto_1 = require("./dto/update-menu.dto");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
let MenusController = class MenusController {
    constructor(menusService) {
        this.menusService = menusService;
    }
    async create(createMenuDto) {
        try {
            return this.menusService.create(createMenuDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.menusService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.menusService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateMenuDto) {
        try {
            return await this.menusService.update(+id, updateMenuDto);
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            return await this.menusService.remove(+id);
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
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_menu_dto_1.UpdateMenuDto]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "remove", null);
MenusController = __decorate([
    (0, common_1.Controller)('menus'),
    __metadata("design:paramtypes", [menus_service_1.MenusService])
], MenusController);
exports.MenusController = MenusController;
//# sourceMappingURL=menus.controller.js.map