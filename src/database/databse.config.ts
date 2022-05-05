import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from 'src/api/categories/entities/category.entity';
import { ClientEvent } from 'src/api/client-event/entities/client-event.entity';
import { Comment } from 'src/api/comments/entities/comment.entity';
import { Company } from 'src/api/companies/entities/company.entity';
import { CuisineType } from 'src/api/cuisine-types/entities/cuisine-type.entity';
import { EventService } from 'src/api/event-services/entities/event-service.entity';
import { EventType } from 'src/api/event-types/entities/event-type.entity';
import { File } from 'src/api/files/entities/file.entity';
import { Foodtruck } from 'src/api/foodtrucks/entities/foodtruck.entity';
import { LegalForm } from 'src/api/legal-forms/entities/legal-form.entity';
import { MenuItemGroup } from 'src/api/menu-item-groups/entities/menu-item-group.entity';
import { MenuItem } from 'src/api/menu-items/entities/menu-item.entity';
import { Menu } from 'src/api/menus/entities/menu.entity';
import { Role } from 'src/api/roles/entities/role.entity';
import { SpecialDiet } from 'src/api/special-diets/entities/special-diet.entity';
import { User } from 'src/api/users/entities/user.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT),
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: [
    Comment,
    Category,
    Company,
    CuisineType,
    EventService,
    EventType,
    File,
    Foodtruck,
    LegalForm,
    Menu,
    MenuItem,
    MenuItemGroup,
    Role,
    SpecialDiet,
    User,
    ClientEvent,
  ],
};
