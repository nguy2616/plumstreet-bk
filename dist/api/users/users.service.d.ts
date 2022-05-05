/// <reference types="node" />
import { Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    private readonly filesSerivce;
    constructor(usersRepository: Repository<User>, filesSerivce: FilesService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: any): Promise<User>;
    remove(id: number): Promise<string>;
    addAvatar(id: number, imageBuffer: Buffer, filename: string): Promise<import("../files/entities/file.entity").File>;
    deleteAvatar(id: number): Promise<User>;
    private hasedPw;
}
