import { LegalFormsService } from './legal-forms.service';
import { CreateLegalFormDto } from './dto/create-legal-form.dto';
import { UpdateLegalFormDto } from './dto/update-legal-form.dto';
export declare class LegalFormsController {
    private readonly legalFormsService;
    constructor(legalFormsService: LegalFormsService);
    create(createLegalFormDto: CreateLegalFormDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateLegalFormDto: UpdateLegalFormDto): Promise<any>;
    remove(id: string): Promise<any>;
}
