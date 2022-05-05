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
exports.MenuItemGroupsController = void 0;
const common_1 = require("@nestjs/common");
const menu_item_groups_service_1 = require("./menu-item-groups.service");
const create_menu_item_group_dto_1 = require("./dto/create-menu-item-group.dto");
const update_menu_item_group_dto_1 = require("./dto/update-menu-item-group.dto");
const jwt_guard_1 = require("../../auth/guard/jwt.guard");
let MenuItemGroupsController = class MenuItemGroupsController {
    constructor(menuItemGroupsService) {
        this.menuItemGroupsService = menuItemGroupsService;
    }
    async create(createMenuItemGroupDto) {
        try {
            return await this.menuItemGroupsService.create(createMenuItemGroupDto);
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            return await this.menuItemGroupsService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(id) {
        try {
            return await this.menuItemGroupsService.findOne(+id);
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateMenuItemGroupDto) {
        try {
            return await this.menuItemGroupsService.update(+id, updateMenuItemGroupDto);
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            return await this.menuItemGroupsService.remove(+id);
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
    __metadata("design:paramtypes", [create_menu_item_group_dto_1.CreateMenuItemGroupDto]),
    __metadata("design:returntype", Promise)
], MenuItemGroupsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuItemGroupsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuItemGroupsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_menu_item_group_dto_1.UpdateMenuItemGroupDto]),
    __metadata("design:returntype", Promise)
], MenuItemGroupsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuItemGroupsController.prototype, "remove", null);
MenuItemGroupsController = __decorate([
    (0, common_1.Controller)('menu-item-groups'),
    __metadata("design:paramtypes", [menu_item_groups_service_1.MenuItemGroupsService])
], MenuItemGroupsController);
exports.MenuItemGroupsController = MenuItemGroupsController;
//# sourceMappingURL=menu-item-groups.controller.js.map