import { Repository } from 'typeorm';
import { CreateClientEventDto } from './dto/create-client-event.dto';
import { ClientEvent } from './entities/client-event.entity';
export declare class ClientEventService {
    private eventsRepository;
    constructor(eventsRepository: Repository<ClientEvent>);
    create(createClientEventDto: CreateClientEventDto): Promise<ClientEvent>;
    findAll(): Promise<ClientEvent[]>;
    findOne(id: number): Promise<ClientEvent>;
    update(id: number, updateClientEventDto: any): Promise<ClientEvent>;
    remove(id: number): Promise<string>;
}
