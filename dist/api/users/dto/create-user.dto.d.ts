import { ClientEvent } from 'src/api/client-event/entities/client-event.entity';
import { Company } from 'src/api/companies/entities/company.entity';
import { Role } from 'src/api/roles/entities/role.entity';
export declare class CreateUserDto {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: Role;
    company: Company;
    events: ClientEvent[];
}
