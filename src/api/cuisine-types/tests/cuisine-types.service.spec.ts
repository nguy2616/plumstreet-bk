import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UpdateResult } from 'typeorm';
import { CuisineTypesService } from '../cuisine-types.service';
import { UpdateCuisineTypeDto } from '../dto/update-cuisine-type.dto';
import { CuisineType } from '../entities/cuisine-type.entity';

describe('CuisineTypesService', () => {
  let service: CuisineTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CuisineTypesService,
        {
          provide: getRepositoryToken(CuisineType),
          useValue: {},
        },
      ],
    }).compile();
    service = module.get<CuisineTypesService>(CuisineTypesService);
  });

  describe('findAll', () => {
    it('return a list of categories', async () => {
      const result = [new CuisineType()];
      jest.spyOn(service, 'findAll').mockReturnValue(Promise.resolve(result));
      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('return a category', async () => {
      const result = new CuisineType();
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(result));
      expect(await service.findOne(1)).toEqual(result);
    });
  });

  describe('update', () => {
    it('return update result', async () => {
      const result = new CuisineType();
      jest.spyOn(service, 'update').mockReturnValue(Promise.resolve(result));
      expect(await service.update(1, UpdateCuisineTypeDto)).toEqual(result);
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
