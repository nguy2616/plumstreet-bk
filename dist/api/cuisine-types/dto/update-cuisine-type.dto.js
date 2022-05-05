"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCuisineTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cuisine_type_dto_1 = require("./create-cuisine-type.dto");
class UpdateCuisineTypeDto extends (0, mapped_types_1.PartialType)(create_cuisine_type_dto_1.CreateCuisineTypeDto) {
}
exports.UpdateCuisineTypeDto = UpdateCuisineTypeDto;
//# sourceMappingURL=update-cuisine-type.dto.js.map