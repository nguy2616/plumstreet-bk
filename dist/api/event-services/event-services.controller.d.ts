import { EventServicesService } from './event-services.service';
import { CreateEventServiceDto } from './dto/create-event-service.dto';
import { UpdateEventServiceDto } from './dto/update-event-service.dto';
export declare class EventServicesController {
    private readonly eventServicesService;
    constructor(eventServicesService: EventServicesService);
    create(createEventServiceDto: CreateEventServiceDto): any;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateEventServiceDto: UpdateEventServiceDto): Promise<any>;
    remove(id: string): Promise<any>;
}
