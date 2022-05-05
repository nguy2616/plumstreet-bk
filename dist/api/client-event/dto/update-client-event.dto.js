"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientEventDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_client_event_dto_1 = require("./create-client-event.dto");
class UpdateClientEventDto extends (0, mapped_types_1.PartialType)(create_client_event_dto_1.CreateClientEventDto) {
}
exports.UpdateClientEventDto = UpdateClientEventDto;
//# sourceMappingURL=update-client-event.dto.js.map