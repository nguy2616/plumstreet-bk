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
exports.MenuItemGroupsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notFound_exception_1 = require("../../utils/notFound.exception");
const menu_item_group_entity_1 = require("./entities/menu-item-group.entity");
let MenuItemGroupsService = class MenuItemGroupsService {
    constructor(menuItemGroupsRepository) {
        this.menuItemGroupsRepository = menuItemGroupsRepository;
    }
    async create(createMenuItemGroupDto) {
        const newMenuGroup = await this.menuItemGroupsRepository.create(createMenuItemGroupDto);
        await this.menuItemGroupsRepository.save(newMenuGroup);
        return newMenuGroup;
    }
    async findAll() {
        return await this.menuItemGroupsRepository.find();
    }
    async findOne(id) {
        const menuGroup = await this.menuItemGroupsRepository.findOne(id);
        if (menuGroup) {
            return menuGroup;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateMenuItemGroupDto) {
        const update = await this.menuItemGroupsRepository.update(id, updateMenuItemGroupDto);
        if (update) {
            const menuGroup = await this.findOne(id);
            return menuGroup;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        if (await this.menuItemGroupsRepository.delete(id)) {
            return `Delete successfully id ${id}`;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
};
MenuItemGroupsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_item_group_entity_1.MenuItemGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuItemGroupsService);
exports.MenuItemGroupsService = MenuItemGroupsService;
//# sourceMappingURL=menu-item-groups.service.js.map