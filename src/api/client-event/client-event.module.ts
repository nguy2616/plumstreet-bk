import { Module } from '@nestjs/common';
import { ClientEventService } from './client-event.service';
import { ClientEventController } from './client-event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEvent } from './entities/client-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEvent])],
  controllers: [ClientEventController],
  providers: [ClientEventService],
})
export class ClientEventModule {}
