"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../api/categories/entities/category.entity");
const client_event_entity_1 = require("../api/client-event/entities/client-event.entity");
const comment_entity_1 = require("../api/comments/entities/comment.entity");
const company_entity_1 = require("../api/companies/entities/company.entity");
const cuisine_type_entity_1 = require("../api/cuisine-types/entities/cuisine-type.entity");
const event_service_entity_1 = require("../api/event-services/entities/event-service.entity");
const event_type_entity_1 = require("../api/event-types/entities/event-type.entity");
const file_entity_1 = require("../api/files/entities/file.entity");
const foodtruck_entity_1 = require("../api/foodtrucks/entities/foodtruck.entity");
const legal_form_entity_1 = require("../api/legal-forms/entities/legal-form.entity");
const menu_item_group_entity_1 = require("../api/menu-item-groups/entities/menu-item-group.entity");
const menu_item_entity_1 = require("../api/menu-items/entities/menu-item.entity");
const menu_entity_1 = require("../api/menus/entities/menu.entity");
const role_entity_1 = require("../api/roles/entities/role.entity");
const special_diet_entity_1 = require("../api/special-diets/entities/special-diet.entity");
const user_entity_1 = require("../api/users/entities/user.entity");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    username: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DB'),
                    entities: [
                        comment_entity_1.Comment,
                        category_entity_1.Category,
                        company_entity_1.Company,
                        cuisine_type_entity_1.CuisineType,
                        event_service_entity_1.EventService,
                        event_type_entity_1.EventType,
                        file_entity_1.File,
                        foodtruck_entity_1.Foodtruck,
                        legal_form_entity_1.LegalForm,
                        menu_entity_1.Menu,
                        menu_item_entity_1.MenuItem,
                        menu_item_group_entity_1.MenuItemGroup,
                        role_entity_1.Role,
                        special_diet_entity_1.SpecialDiet,
                        user_entity_1.User,
                        client_event_entity_1.ClientEvent,
                    ],
                    synchronize: true,
                }),
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map