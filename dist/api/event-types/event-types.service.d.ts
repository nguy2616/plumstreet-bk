import { Repository } from 'typeorm';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { EventType } from './entities/event-type.entity';
export declare class EventTypesService {
    private eventTypesRepository;
    constructor(eventTypesRepository: Repository<EventType>);
    create(createEventTypeDto: CreateEventTypeDto): Promise<EventType>;
    findAll(): Promise<EventType[]>;
    findOne(id: number): Promise<EventType>;
    update(id: number, updateEventTypeDto: UpdateEventTypeDto): Promise<EventType>;
    remove(id: number): Promise<string>;
}
