import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
