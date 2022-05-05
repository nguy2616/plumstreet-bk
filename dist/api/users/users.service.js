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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const files_service_1 = require("../files/files.service");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const notFound_exception_1 = require("../../utils/notFound.exception");
let UsersService = class UsersService {
    constructor(usersRepository, filesSerivce) {
        this.usersRepository = usersRepository;
        this.filesSerivce = filesSerivce;
    }
    async create(createUserDto) {
        const newUser = this.usersRepository.create({
            ...createUserDto,
            role: createUserDto.role ? createUserDto.role : { id: 2 },
            company: createUserDto.company ? createUserDto.company : null,
            events: createUserDto.events ? createUserDto.events : [],
        });
        await this.hasedPw(newUser);
        await this.usersRepository.save(newUser);
        return newUser;
    }
    async findByEmail(email) {
        const user = await this.usersRepository.findOne({ email });
        if (user) {
            return user;
        }
        else {
            throw new notFound_exception_1.NotFoundException(email);
        }
    }
    async findAll() {
        const users = await this.usersRepository.find();
        users.forEach((user) => {
            user.password = undefined;
        });
        return users;
    }
    async findOne(id) {
        const user = await this.usersRepository.findOne(id, {
            relations: ['events'],
        });
        if (user) {
            user.password = undefined;
            return user;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async update(id, updateUserDto) {
        updateUserDto.id = Number(id);
        await this.hasedPw(updateUserDto);
        const update = await this.usersRepository.save(updateUserDto);
        if (update) {
            const user = await this.findOne(id);
            return user;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async remove(id) {
        if (await this.usersRepository.delete(id)) {
            return `deleted ${id}`;
        }
        throw new notFound_exception_1.NotFoundException(id);
    }
    async addAvatar(id, imageBuffer, filename) {
        const user = await this.deleteAvatar(id);
        const avatar = await this.filesSerivce.uploadFile(imageBuffer, filename);
        await this.usersRepository.update(id, {
            ...user,
            avatar,
        });
        return avatar;
    }
    async deleteAvatar(id) {
        const user = await this.usersRepository.findOne(id);
        if (user.avatar) {
            await this.usersRepository.update(id, {
                ...user,
                avatar: null,
            });
            await this.filesSerivce.remove(user.avatar.id);
        }
        return user;
    }
    async hasedPw(user) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return hashedPassword;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map