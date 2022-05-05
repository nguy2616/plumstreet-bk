/// <reference types="multer" />
import { FilesService } from './files.service';
import { UpdateFileDto } from './dto/update-file.dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    upload(file: Express.Multer.File): Promise<any>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateFileDto: UpdateFileDto): any;
    remove(id: string): Promise<any>;
}
