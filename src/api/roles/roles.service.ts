import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    const role = await this.rolesRepository.create(createRoleDto);
    await this.rolesRepository.save(role);
    return role;
  }

  async findAll() {
    return await this.rolesRepository.find();
  }

  async findOne(id: number) {
    const role = await this.rolesRepository.findOne(id);
    if (role) {
      return role;
    } else {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.rolesRepository.update(id, updateRoleDto);
  }

  async remove(id: number) {
    return await this.rolesRepository.delete(id);
  }
}
