"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialDietsModule = void 0;
const common_1 = require("@nestjs/common");
const special_diets_service_1 = require("./special-diets.service");
const special_diets_controller_1 = require("./special-diets.controller");
const typeorm_1 = require("@nestjs/typeorm");
const special_diet_entity_1 = require("./entities/special-diet.entity");
let SpecialDietsModule = class SpecialDietsModule {
};
SpecialDietsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([special_diet_entity_1.SpecialDiet])],
        controllers: [special_diets_controller_1.SpecialDietsController],
        providers: [special_diets_service_1.SpecialDietsService],
    })
], SpecialDietsModule);
exports.SpecialDietsModule = SpecialDietsModule;
//# sourceMappingURL=special-diets.module.js.map