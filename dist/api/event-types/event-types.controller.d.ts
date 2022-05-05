import { EventTypesService } from './event-types.service';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
export declare class EventTypesController {
    private readonly eventTypesService;
    constructor(eventTypesService: EventTypesService);
    create(createEventTypeDto: CreateEventTypeDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateEventTypeDto: UpdateEventTypeDto): any;
    remove(id: string): any;
}
