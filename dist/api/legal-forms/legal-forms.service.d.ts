import { Repository } from 'typeorm';
import { CreateLegalFormDto } from './dto/create-legal-form.dto';
import { UpdateLegalFormDto } from './dto/update-legal-form.dto';
import { LegalForm } from './entities/legal-form.entity';
export declare class LegalFormsService {
    private legalFormsRepository;
    constructor(legalFormsRepository: Repository<LegalForm>);
    create(createLegalFormDto: CreateLegalFormDto): Promise<LegalForm>;
    findAll(): Promise<LegalForm[]>;
    findOne(id: number): Promise<LegalForm>;
    update(id: number, updateLegalFormDto: UpdateLegalFormDto): Promise<LegalForm>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
