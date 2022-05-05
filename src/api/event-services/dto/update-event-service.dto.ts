import { PartialType } from '@nestjs/mapped-types';
import { CreateEventServiceDto } from './create-event-service.dto';

export class UpdateEventServiceDto extends PartialType(CreateEventServiceDto) {}
