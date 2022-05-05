"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodtrucksModule = void 0;
const common_1 = require("@nestjs/common");
const foodtrucks_service_1 = require("./foodtrucks.service");
const foodtrucks_controller_1 = require("./foodtrucks.controller");
const typeorm_1 = require("@nestjs/typeorm");
const foodtruck_entity_1 = require("./entities/foodtruck.entity");
let FoodtrucksModule = class FoodtrucksModule {
};
FoodtrucksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([foodtruck_entity_1.Foodtruck])],
        controllers: [foodtrucks_controller_1.FoodtrucksController],
        providers: [foodtrucks_service_1.FoodtrucksService],
    })
], FoodtrucksModule);
exports.FoodtrucksModule = FoodtrucksModule;
//# sourceMappingURL=foodtrucks.module.js.map