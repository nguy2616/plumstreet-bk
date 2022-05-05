import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Foodtruck } from '../../foodtrucks/entities/foodtruck.entity';
import { User } from '../../users/entities/user.entity';
import { CompaniesService } from '../companies.service';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../entities/company.entity';

describe('CompaniesService', () => {
  let service: CompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        {
          provide: getRepositoryToken(Company),
          useValue: {},
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();
    service = module.get<CompaniesService>(CompaniesService);
  });

  describe('findAll', () => {
    it('return a list of categories', async () => {
      const result = [new Company()];
      jest.spyOn(service, 'findAll').mockReturnValue(Promise.resolve(result));
      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('return a category', async () => {
      const result = new Company();
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(result));
      expect(await service.findOne(1)).toEqual(result);
    });
  });

  describe('update', () => {
    it('return update result', async () => {
      const result = new Company();
      jest.spyOn(service, 'update').mockReturnValue(Promise.resolve(result));
      expect(await service.update(1, UpdateCompanyDto)).toEqual(result);
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
