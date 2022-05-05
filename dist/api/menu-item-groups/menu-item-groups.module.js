"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemGroupsModule = void 0;
const common_1 = require("@nestjs/common");
const menu_item_groups_service_1 = require("./menu-item-groups.service");
const menu_item_groups_controller_1 = require("./menu-item-groups.controller");
const typeorm_1 = require("@nestjs/typeorm");
const menu_item_group_entity_1 = require("./entities/menu-item-group.entity");
let MenuItemGroupsModule = class MenuItemGroupsModule {
};
MenuItemGroupsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([menu_item_group_entity_1.MenuItemGroup])],
        controllers: [menu_item_groups_controller_1.MenuItemGroupsController],
        providers: [menu_item_groups_service_1.MenuItemGroupsService],
    })
], MenuItemGroupsModule);
exports.MenuItemGroupsModule = MenuItemGroupsModule;
//# sourceMappingURL=menu-item-groups.module.js.map