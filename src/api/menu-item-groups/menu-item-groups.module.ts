import { Module } from '@nestjs/common';
import { MenuItemGroupsService } from './menu-item-groups.service';
import { MenuItemGroupsController } from './menu-item-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItemGroup } from './entities/menu-item-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemGroup])],
  controllers: [MenuItemGroupsController],
  providers: [MenuItemGroupsService],
})
export class MenuItemGroupsModule {}
