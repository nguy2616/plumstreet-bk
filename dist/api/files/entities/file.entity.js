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
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const typeorm_1 = require("typeorm");
const genetic_entity_1 = require("../../../utils/genetic.entity");
const menu_item_entity_1 = require("../../menu-items/entities/menu-item.entity");
const menu_entity_1 = require("../../menus/entities/menu.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let File = class File extends genetic_entity_1.Genetic {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], File.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], File.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], File.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.avatar),
    __metadata("design:type", user_entity_1.User)
], File.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_entity_1.Menu, (menu) => menu.images),
    __metadata("design:type", menu_entity_1.Menu)
], File.prototype, "menu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => menu_item_entity_1.MenuItem, (menu_item) => menu_item.images),
    __metadata("design:type", menu_item_entity_1.MenuItem)
], File.prototype, "menu_item", void 0);
File = __decorate([
    (0, typeorm_1.Entity)('files')
], File);
exports.File = File;
//# sourceMappingURL=file.entity.js.map