/// <reference types="multer" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: string, updateUserDto: UpdateUserDto): any;
    remove(id: string): any;
    addAvatar(req: any, file: Express.Multer.File): Promise<any>;
}
