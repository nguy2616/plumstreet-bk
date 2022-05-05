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
exports.MenuItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notFound_exception_1 = require("../../utils/notFound.exception");
const menu_item_entity_1 = require("./entities/menu-item.entity");
let MenuItemsService = class MenuItemsService {
    constructor(menuItemsRepository) {
        this.menuItemsRepository = menuItemsRepository;
    }
    async create(createMenuItemDto) {
        const menuItem = await this.menuItemsRepository.create({
            ...createMenuItemDto,
            menu_item_group: createMenuItemDto.menu_item_group,
            menu: createMenuItemDto.menu,
            cuisine_types: createMenuItemDto.cuisine_types
                ? createMenuItemDto.cuisine_types
                : [],
            special_diets: createMenuItemDto.special_diets
                ? createMenuItemDto.special_diets
                : [],
        });
        await this.menuItemsRepository.save(menuItem);
        menuItem.price = Number(menuItem.price).toFixed(2);
        return menuItem;
    }
    async findAll() {
        const menuItems = await this.menuItemsRepository.find({
            relations: ['menu'],
        });
        menuItems.forEach((item) => {
            item.menu = item.menu.id;
            item.price = Number(item.price).toFixed(2);
        });
        return menuItems;
    }
    async findOne(id) {
        const menuItem = await this.menuItemsRepository.findOne(id, {
            relations: ['menu'],
        });
        if (menuItem) {
            menuItem.menu = menuItem.menu.id;
            menuItem.price = Number(menuItem.price).toFixed(2);
            return menuItem;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateMenuItemDto) {
        updateMenuItemDto.id = Number(id);
        const updated = await this.menuItemsRepository.save(updateMenuItemDto);
        if (updated) {
            return await this.findOne(id);
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        if (await this.menuItemsRepository.delete(id)) {
            return `successfully deleted id ${id}`;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
};
MenuItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_item_entity_1.MenuItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuItemsService);
exports.MenuItemsService = MenuItemsService;
//# sourceMappingURL=menu-items.service.js.map