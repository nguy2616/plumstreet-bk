import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '../../utils/notFound.exception';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = this.companiesRepository.create({
      ...createCompanyDto,
      category: createCompanyDto.category,
      legalForm: createCompanyDto.legalForm ? createCompanyDto.legalForm : null,
      contacts: createCompanyDto.contacts ? createCompanyDto.contacts : [],
    });
    if (company) {
      await this.companiesRepository.save(await this.hashContactsPw(company));
      company.contacts.forEach((cont) => {
        cont.password = undefined;
      });
      return company;
    }
  }

  async findAll() {
    return await this.companiesRepository.find({
      relations: ['contacts', 'foodtrucks', 'menus'],
    });
  }

  async findOne(id: number) {
    const company = await this.companiesRepository.findOne(id, {
      relations: ['contacts', 'foodtrucks', 'menus'],
    });
    if (company) {
      company.contacts.forEach((cont) => {
        cont.password = undefined;
      });
      return company;
    }
    throw new NotFoundException(id);
  }

  async update(id: number, updateCompanyDto: any) {
    updateCompanyDto.id = Number(id);
    if (updateCompanyDto.contacts.length > 0) {
      updateCompanyDto = await this.hashContactsPw(updateCompanyDto);
    }
    const updated = await this.companiesRepository.save(updateCompanyDto);
    if (updated) {
      const company = await this.findOne(id);
      return company;
    }
    throw new NotFoundException(id);
  }

  async remove(id: number) {
    const company = await this.findOne(id);
    if (company) {
      if (company.contacts) {
        this.deleteChildren(company.contacts);
      }
      if (company.menus) {
        this.deleteChildren(company.menus);
      }
      if (company.foodtrucks) {
        this.deleteChildren(company.foodtrucks);
      }
      const deleted = await this.companiesRepository.delete(id);
      if (deleted) {
        return `deleted ${id}`;
      }
    }
    throw new NotFoundException(id);
  }
  private async hashContactsPw(company: any) {
    for (let index = 0; index <= company.contacts.length; index++) {
      if (index < company.contacts.length) {
        if (company.contacts[index].password) {
          const hashedPassword = await bcrypt.hash(
            company.contacts[index].password,
            10,
          );
          company.contacts[index].password = hashedPassword;
        }
      }
    }
    return company;
  }

  private async deleteChildren(childrenList) {
    childrenList.forEach(async (child) => {
      await this.usersRepository.delete(child.id);
    });
  }
}
