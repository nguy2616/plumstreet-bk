import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoriesRepository.create(createCategoryDto);
    await this.categoriesRepository.save(category);
    return category;
  }

  async findAll() {
    return await this.categoriesRepository.find();
  }

  async findOne(id: number) {
    const cat = await this.categoriesRepository.findOne(id);
    if (cat) {
      return cat;
    } else {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updated = await this.categoriesRepository.update(
      id,
      updateCategoryDto,
    );
    return updated;
  }

  async remove(id: number) {
    if (await this.categoriesRepository.delete(id)) {
      return `deleted id ${id}`;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
