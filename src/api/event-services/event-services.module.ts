import { Module } from '@nestjs/common';
import { EventServicesService } from './event-services.service';
import { EventServicesController } from './event-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './entities/event-service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventService])],
  controllers: [EventServicesController],
  providers: [EventServicesService],
})
export class EventServicesModule {}
