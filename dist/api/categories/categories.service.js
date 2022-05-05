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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async create(createCategoryDto) {
        const category = await this.categoriesRepository.create(createCategoryDto);
        await this.categoriesRepository.save(category);
        return category;
    }
    async findAll() {
        return await this.categoriesRepository.find();
    }
    async findOne(id) {
        const cat = await this.categoriesRepository.findOne(id);
        if (cat) {
            return cat;
        }
        else {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(id, updateCategoryDto) {
        const updated = await this.categoriesRepository.update(id, updateCategoryDto);
        return updated;
    }
    async remove(id) {
        if (await this.categoriesRepository.delete(id)) {
            return `deleted id ${id}`;
        }
        throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map