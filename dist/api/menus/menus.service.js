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
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notFound_exception_1 = require("../../utils/notFound.exception");
const menu_item_entity_1 = require("../menu-items/entities/menu-item.entity");
const menu_entity_1 = require("./entities/menu.entity");
let MenusService = class MenusService {
    constructor(menusRepository, menuItemsRepository) {
        this.menusRepository = menusRepository;
        this.menuItemsRepository = menuItemsRepository;
    }
    async create(createMenuDto) {
        const newMenu = await this.menusRepository.create({
            ...createMenuDto,
            isStandard: createMenuDto.isStandard ? createMenuDto.isStandard : true,
            company: createMenuDto.company,
            cuisine_types: createMenuDto.cuisine_types
                ? createMenuDto.cuisine_types
                : [],
            special_diets: createMenuDto.special_diets
                ? createMenuDto.special_diets
                : [],
        });
        await this.menusRepository.save(newMenu);
        return newMenu;
    }
    async findAll() {
        return await this.menusRepository.find({
            relations: ['menu_items'],
        });
    }
    async findOne(id) {
        const menu = await this.menusRepository.findOne(id, {
            relations: ['menu_items'],
        });
        if (menu) {
            return menu;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateMenuDto) {
        updateMenuDto.id = Number(id);
        const update = await this.menusRepository.save(updateMenuDto);
        if (update) {
            const menu = await this.findOne(id);
            return menu;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        const menu = await this.findOne(id);
        if (menu.menu_items.length > 0) {
            await this.deleteItems(menu);
            await this.menusRepository.delete(id);
            return `deleted ${id}`;
        }
        else {
            await this.menusRepository.delete(id);
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async deleteItems(menu) {
        menu.menu_items.forEach(async (item) => {
            await this.menuItemsRepository.delete(item.id);
        });
        return menu;
    }
};
MenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __param(1, (0, typeorm_1.InjectRepository)(menu_item_entity_1.MenuItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MenusService);
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map