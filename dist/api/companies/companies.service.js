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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const company_entity_1 = require("./entities/company.entity");
const bcrypt = require("bcrypt");
const notFound_exception_1 = require("../../utils/notFound.exception");
let CompaniesService = class CompaniesService {
    constructor(companiesRepository, usersRepository) {
        this.companiesRepository = companiesRepository;
        this.usersRepository = usersRepository;
    }
    async create(createCompanyDto) {
        const company = this.companiesRepository.create({
            ...createCompanyDto,
            category: createCompanyDto.category,
            legalForm: createCompanyDto.legalForm ? createCompanyDto.legalForm : null,
            contacts: createCompanyDto.contacts ? createCompanyDto.contacts : [],
        });
        if (company) {
            await this.companiesRepository.save(await this.hashContactsPw(company));
            company.contacts.forEach((cont) => {
                cont.password = undefined;
            });
            return company;
        }
    }
    async findAll() {
        return await this.companiesRepository.find({
            relations: ['contacts', 'foodtrucks', 'menus'],
        });
    }
    async findOne(id) {
        const company = await this.companiesRepository.findOne(id, {
            relations: ['contacts', 'foodtrucks', 'menus'],
        });
        if (company) {
            company.contacts.forEach((cont) => {
                cont.password = undefined;
            });
            return company;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateCompanyDto) {
        updateCompanyDto.id = Number(id);
        if (updateCompanyDto.contacts.length > 0) {
            updateCompanyDto = await this.hashContactsPw(updateCompanyDto);
        }
        const updated = await this.companiesRepository.save(updateCompanyDto);
        if (updated) {
            const company = await this.findOne(id);
            return company;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        const company = await this.findOne(id);
        if (company) {
            if (company.contacts) {
                this.deleteChildren(company.contacts);
            }
            if (company.menus) {
                this.deleteChildren(company.menus);
            }
            if (company.foodtrucks) {
                this.deleteChildren(company.foodtrucks);
            }
            const deleted = await this.companiesRepository.delete(id);
            if (deleted) {
                return `deleted ${id}`;
            }
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async hashContactsPw(company) {
        for (let index = 0; index <= company.contacts.length; index++) {
            if (index < company.contacts.length) {
                if (company.contacts[index].password) {
                    const hashedPassword = await bcrypt.hash(company.contacts[index].password, 10);
                    company.contacts[index].password = hashedPassword;
                }
            }
        }
        return company;
    }
    async deleteChildren(childrenList) {
        childrenList.forEach(async (child) => {
            await this.usersRepository.delete(child.id);
        });
    }
};
CompaniesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map