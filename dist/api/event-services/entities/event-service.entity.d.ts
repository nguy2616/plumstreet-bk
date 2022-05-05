import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
export declare class EventService extends Genetic {
    id: number;
    name: string;
    events: ClientEvent[];
}
