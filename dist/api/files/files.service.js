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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aws_sdk_1 = require("aws-sdk");
const typeorm_2 = require("typeorm");
const file_entity_1 = require("./entities/file.entity");
const uuid_1 = require("uuid");
let FilesService = class FilesService {
    constructor(filesRepository) {
        this.filesRepository = filesRepository;
    }
    async uploadFile(dataBuffer, filename) {
        const s3 = new aws_sdk_1.S3({
            accessKeyId: 'AKIAU6D4EWUS2JHQEGUO',
            secretAccessKey: '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',
            region: 'us-east-1',
        });
        const uploadResult = await s3
            .upload({
            Bucket: 'plumstreet',
            Body: dataBuffer,
            Key: `${(0, uuid_1.v4)()}-${filename}`,
        })
            .promise();
        const newFile = this.filesRepository.create({
            key: uploadResult.Key,
            url: uploadResult.Location,
        });
        await this.filesRepository.save(newFile);
        return newFile;
    }
    findAll() {
        return `This action returns all files`;
    }
    findOne(id) {
        return `This action returns a #${id} file`;
    }
    update(id, updateFileDto) {
        return `This action updates a #${id} file`;
    }
    async remove(id) {
        const file = await this.filesRepository.findOne({ id: id });
        const s3 = new aws_sdk_1.S3({
            accessKeyId: 'AKIAU6D4EWUS2JHQEGUO',
            secretAccessKey: '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',
            region: 'us-east-1',
        });
        await s3
            .deleteObject({
            Bucket: 'plumstreet',
            Key: file.key,
        })
            .promise();
        await this.filesRepository.delete(id);
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map