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
exports.FoodtrucksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const foodtruck_entity_1 = require("./entities/foodtruck.entity");
let FoodtrucksService = class FoodtrucksService {
    constructor(foodtrucksRepository) {
        this.foodtrucksRepository = foodtrucksRepository;
    }
    async create(createFoodtruckDto) {
        const ft = await this.foodtrucksRepository.create({
            ...createFoodtruckDto,
            company: createFoodtruckDto.company,
        });
        if (ft) {
            await this.foodtrucksRepository.save(ft);
        }
        return ft;
    }
    async findAll() {
        const fts = await this.foodtrucksRepository.find();
        return fts;
    }
    async findOne(id) {
        const ft = await this.foodtrucksRepository.findOne(id);
        if (ft) {
            return ft;
        }
        throw new common_1.NotFoundException(id);
    }
    async update(id, updateFoodtruckDto) {
        updateFoodtruckDto.id = Number(id);
        const update = await this.foodtrucksRepository.save(updateFoodtruckDto);
        if (update) {
            return await this.findOne(id);
        }
        throw new common_1.NotFoundException(id);
    }
    async remove(id) {
        if (await this.foodtrucksRepository.delete(id)) {
            return `Deleted ${id}`;
        }
        throw new common_1.NotFoundException(id);
    }
};
FoodtrucksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(foodtruck_entity_1.Foodtruck)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FoodtrucksService);
exports.FoodtrucksService = FoodtrucksService;
//# sourceMappingURL=foodtrucks.service.js.map