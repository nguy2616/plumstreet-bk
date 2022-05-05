"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLegalFormDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_legal_form_dto_1 = require("./create-legal-form.dto");
class UpdateLegalFormDto extends (0, mapped_types_1.PartialType)(create_legal_form_dto_1.CreateLegalFormDto) {
}
exports.UpdateLegalFormDto = UpdateLegalFormDto;
//# sourceMappingURL=update-legal-form.dto.js.map