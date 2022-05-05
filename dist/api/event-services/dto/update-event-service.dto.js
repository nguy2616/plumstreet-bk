"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventServiceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_event_service_dto_1 = require("./create-event-service.dto");
class UpdateEventServiceDto extends (0, mapped_types_1.PartialType)(create_event_service_dto_1.CreateEventServiceDto) {
}
exports.UpdateEventServiceDto = UpdateEventServiceDto;
//# sourceMappingURL=update-event-service.dto.js.map