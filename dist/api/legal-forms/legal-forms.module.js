"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalFormsModule = void 0;
const common_1 = require("@nestjs/common");
const legal_forms_service_1 = require("./legal-forms.service");
const legal_forms_controller_1 = require("./legal-forms.controller");
const typeorm_1 = require("@nestjs/typeorm");
const legal_form_entity_1 = require("./entities/legal-form.entity");
let LegalFormsModule = class LegalFormsModule {
};
LegalFormsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([legal_form_entity_1.LegalForm])],
        controllers: [legal_forms_controller_1.LegalFormsController],
        providers: [legal_forms_service_1.LegalFormsService],
    })
], LegalFormsModule);
exports.LegalFormsModule = LegalFormsModule;
//# sourceMappingURL=legal-forms.module.js.map