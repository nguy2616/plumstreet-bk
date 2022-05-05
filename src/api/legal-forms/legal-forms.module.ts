import { Module } from '@nestjs/common';
import { LegalFormsService } from './legal-forms.service';
import { LegalFormsController } from './legal-forms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegalForm } from './entities/legal-form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LegalForm])],
  controllers: [LegalFormsController],
  providers: [LegalFormsService],
})
export class LegalFormsModule {}
