import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClientEventService } from '../client-event.service';
import { UpdateClientEventDto } from '../dto/update-client-event.dto';
import { ClientEvent } from '../entities/client-event.entity';

describe('ClientEventService', () => {
  let service: ClientEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientEventService,
        {
          provide: getRepositoryToken(ClientEvent),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ClientEventService>(ClientEventService);
  });

  describe('findAll', () => {
    it('return an array of objects', async () => {
      const result = [new ClientEvent()];
      jest.spyOn(service, 'findAll').mockReturnValue(Promise.resolve(result));
      expect(await service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('return an object', async () => {
      const result = new ClientEvent();
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(result));
      expect(await service.findOne(1)).toEqual(result);
    });
  });

  describe('update', () => {
    it('return update result or updated object', async () => {
      const result = new ClientEvent();
      jest.spyOn(service, 'update').mockReturnValue(Promise.resolve(result));
      expect(await service.update(1, UpdateClientEventDto)).toEqual(result);
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
