"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFoodtruckDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_foodtruck_dto_1 = require("./create-foodtruck.dto");
class UpdateFoodtruckDto extends (0, mapped_types_1.PartialType)(create_foodtruck_dto_1.CreateFoodtruckDto) {
}
exports.UpdateFoodtruckDto = UpdateFoodtruckDto;
//# sourceMappingURL=update-foodtruck.dto.js.map