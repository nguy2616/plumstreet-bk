"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const categories_module_1 = require("./api/categories/categories.module");
const client_event_module_1 = require("./api/client-event/client-event.module");
const comments_module_1 = require("./api/comments/comments.module");
const companies_module_1 = require("./api/companies/companies.module");
const cuisine_types_module_1 = require("./api/cuisine-types/cuisine-types.module");
const event_services_module_1 = require("./api/event-services/event-services.module");
const event_types_module_1 = require("./api/event-types/event-types.module");
const files_module_1 = require("./api/files/files.module");
const legal_forms_module_1 = require("./api/legal-forms/legal-forms.module");
const menu_item_groups_module_1 = require("./api/menu-item-groups/menu-item-groups.module");
const menu_items_module_1 = require("./api/menu-items/menu-items.module");
const menus_module_1 = require("./api/menus/menus.module");
const roles_module_1 = require("./api/roles/roles.module");
const special_diets_module_1 = require("./api/special-diets/special-diets.module");
const users_module_1 = require("./api/users/users.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const database_module_1 = require("./database/database.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            companies_module_1.CompaniesModule,
            categories_module_1.CategoriesModule,
            files_module_1.FilesModule,
            comments_module_1.CommentsModule,
            cuisine_types_module_1.CuisineTypesModule,
            event_services_module_1.EventServicesModule,
            menus_module_1.MenusModule,
            menu_item_groups_module_1.MenuItemGroupsModule,
            menu_items_module_1.MenuItemsModule,
            event_types_module_1.EventTypesModule,
            event_services_module_1.EventServicesModule,
            client_event_module_1.ClientEventModule,
            special_diets_module_1.SpecialDietsModule,
            legal_forms_module_1.LegalFormsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map