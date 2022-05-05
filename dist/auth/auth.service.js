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
exports.AuthService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../api/users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        try {
            const user = await this.usersService.create({
                ...data,
                password: hashedPassword,
            });
            user.password = undefined;
            const token = await this.getCookieWithJwtToken(user.id);
            return { token, user };
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async login(user) {
        const token = await this.getCookieWithJwtToken(user.id);
        return { token, user };
    }
    async checkAuthenticated(email, plainPassword) {
        try {
            const user = await this.usersService.findByEmail(email);
            await this.checkPassword(plainPassword, user.password);
            user.password = undefined;
            return user;
        }
        catch (error) {
            return error;
        }
    }
    async checkPassword(plainPassword, hashedPassword) {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
        if (isMatch) {
            return isMatch;
        }
        else {
            throw new common_1.HttpException('Wrong credentials', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getCookieWithJwtToken(id) {
        const payload = { id };
        const token = await this.jwtService.signAsync(payload);
        return token;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map