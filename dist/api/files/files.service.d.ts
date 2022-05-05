/// <reference types="node" />
import { Repository } from 'typeorm';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
export declare class FilesService {
    private filesRepository;
    constructor(filesRepository: Repository<File>);
    uploadFile(dataBuffer: Buffer, filename: string): Promise<File>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFileDto: UpdateFileDto): string;
    remove(id: number): Promise<void>;
}
