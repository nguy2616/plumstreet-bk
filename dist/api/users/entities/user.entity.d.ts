import { Genetic } from '../../../utils/genetic.entity';
import { ClientEvent } from '../../client-event/entities/client-event.entity';
import { File } from '../../files/entities/file.entity';
import { Role } from '../../roles/entities/role.entity';
export declare class User extends Genetic {
    id: number;
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    avatar: File;
    role: Role;
    company: any;
    events: ClientEvent[];
}
