import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
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
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
