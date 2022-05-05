"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormConfig = void 0;
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
exports.typeormConfig = {
    type: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT),
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    synchronize: true,
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
};
//# sourceMappingURL=databse.config.js.map