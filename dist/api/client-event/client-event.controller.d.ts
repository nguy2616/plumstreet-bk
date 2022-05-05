import { ClientEventService } from './client-event.service';
import { CreateClientEventDto } from './dto/create-client-event.dto';
import { UpdateClientEventDto } from './dto/update-client-event.dto';
export declare class ClientEventController {
    private readonly clientEventService;
    constructor(clientEventService: ClientEventService);
    create(createClientEventDto: CreateClientEventDto): Promise<any>;
    findAll(): Promise<import("./entities/client-event.entity").ClientEvent[]>;
    findOne(id: string): Promise<any>;
    update(id: number, updateClientEventDto: UpdateClientEventDto): any;
    remove(id: string): Promise<any>;
}
