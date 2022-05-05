import Joi from '@hapi/joi';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './api/categories/categories.module';
import { ClientEventModule } from './api/client-event/client-event.module';
import { CommentsModule } from './api/comments/comments.module';
import { CompaniesModule } from './api/companies/companies.module';
import { CuisineTypesModule } from './api/cuisine-types/cuisine-types.module';
import { EventServicesModule } from './api/event-services/event-services.module';
import { EventTypesModule } from './api/event-types/event-types.module';
import { FilesModule } from './api/files/files.module';
import { LegalFormsModule } from './api/legal-forms/legal-forms.module';
import { MenuItemGroupsModule } from './api/menu-item-groups/menu-item-groups.module';
import { MenuItemsModule } from './api/menu-items/menu-items.module';
import { MenusModule } from './api/menus/menus.module';
import { RolesModule } from './api/roles/roles.module';
import { SpecialDietsModule } from './api/special-diets/special-diets.module';
import { UsersModule } from './api/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { typeormConfig } from './database/databse.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    RolesModule,
    CompaniesModule,
    CategoriesModule,
    FilesModule,
    CommentsModule,
    CuisineTypesModule,
    EventServicesModule,
    MenusModule,
    MenuItemGroupsModule,
    MenuItemsModule,
    EventTypesModule,
    EventServicesModule,
    ClientEventModule,
    SpecialDietsModule,
    LegalFormsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
