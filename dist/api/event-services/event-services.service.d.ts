import { Repository } from 'typeorm';
import { CreateEventServiceDto } from './dto/create-event-service.dto';
import { UpdateEventServiceDto } from './dto/update-event-service.dto';
import { EventService } from './entities/event-service.entity';
export declare class EventServicesService {
    private eventServicesRepository;
    constructor(eventServicesRepository: Repository<EventService>);
    create(createEventServiceDto: CreateEventServiceDto): Promise<EventService>;
    findAll(): Promise<EventService[]>;
    findOne(id: number): Promise<EventService>;
    update(id: number, updateEventServiceDto: UpdateEventServiceDto): Promise<EventService>;
    remove(id: number): Promise<string>;
}
