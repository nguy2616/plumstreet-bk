import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuItemGroupDto } from './create-menu-item-group.dto';

export class UpdateMenuItemGroupDto extends PartialType(
  CreateMenuItemGroupDto,
) {}
