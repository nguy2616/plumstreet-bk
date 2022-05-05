import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UpdateResult } from 'typeorm';
import { EventServicesService } from '../event-services.service';
import { UpdateEventServiceDto } from '../dto/update-event-service.dto';
import { EventService } from '../entities/event-service.entity';

describe('EventServicesService', () => {
  let service: EventServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventServicesService,
        {
          provide: getRepositoryToken(EventService),
          useValue: {},
        },
      ],
    }).compile();
    service = module.get<EventServicesService>(EventServicesService);
  });

  describe('findAll', () => {
    it('return a list of categories', async () => {
      const result = [new EventService()];
      jest.spyOn(service, 'findAll').mockReturnValue(Promise.resolve(result));
      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('return a category', async () => {
      const result = new EventService();
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(result));
      expect(await service.findOne(1)).toEqual(result);
    });
  });

  describe('update', () => {
    it('return update result', async () => {
      const result = new EventService();
      jest.spyOn(service, 'update').mockReturnValue(Promise.resolve(result));
      expect(await service.update(1, UpdateEventServiceDto)).toEqual(result);
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
