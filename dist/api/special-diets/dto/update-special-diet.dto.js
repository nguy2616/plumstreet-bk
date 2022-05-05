"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpecialDietDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_special_diet_dto_1 = require("./create-special-diet.dto");
class UpdateSpecialDietDto extends (0, mapped_types_1.PartialType)(create_special_diet_dto_1.CreateSpecialDietDto) {
}
exports.UpdateSpecialDietDto = UpdateSpecialDietDto;
//# sourceMappingURL=update-special-diet.dto.js.map