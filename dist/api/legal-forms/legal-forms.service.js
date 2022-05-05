"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalFormsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notFound_exception_1 = require("../../utils/notFound.exception");
const legal_form_entity_1 = require("./entities/legal-form.entity");
let LegalFormsService = class LegalFormsService {
    constructor(legalFormsRepository) {
        this.legalFormsRepository = legalFormsRepository;
    }
    async create(createLegalFormDto) {
        const legalForm = await this.legalFormsRepository.create(createLegalFormDto);
        await this.legalFormsRepository.save(legalForm);
        return legalForm;
    }
    async findAll() {
        return await this.legalFormsRepository.find();
    }
    async findOne(id) {
        const legalForm = await this.legalFormsRepository.findOne(id);
        if (legalForm) {
            return legalForm;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateLegalFormDto) {
        const updated = await this.legalFormsRepository.update(id, updateLegalFormDto);
        if (updated) {
            return await this.findOne(id);
        }
        else {
            throw new notFound_exception_1.NotFoundException(id);
        }
    }
    async remove(id) {
        const del = await this.legalFormsRepository.delete(id);
        if (del) {
            return del;
        }
        else {
            throw new notFound_exception_1.NotFoundException(id);
        }
    }
};
LegalFormsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(legal_form_entity_1.LegalForm)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LegalFormsService);
exports.LegalFormsService = LegalFormsService;
//# sourceMappingURL=legal-forms.service.js.map