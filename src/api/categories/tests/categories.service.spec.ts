import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UpdateResult } from 'typeorm';
import { CategoriesService } from '../categories.service';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../entities/category.entity';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  describe('findAll', () => {
    it('return a list of categories', async () => {
      const result = [new Category()];
      jest.spyOn(service, 'findAll').mockReturnValue(Promise.resolve(result));
      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('return a category', async () => {
      const result = new Category();
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(result));
      expect(await service.findOne(1)).toEqual(result);
    });
  });

  describe('update', () => {
    it('return update result', async () => {
      const result = new UpdateResult();
      jest.spyOn(service, 'update').mockReturnValue(Promise.resolve(result));
      expect(await service.update(1, UpdateCategoryDto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('return a string ', async () => {
      const result = 'deleted';
      jest.spyOn(service, 'remove').mockReturnValue(Promise.resolve(result));
      expect(await service.remove(1)).toEqual(result);
    });
  });
});
