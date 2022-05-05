import { IsNotEmpty, MinLength } from 'class-validator';
import { ClientEvent } from 'src/api/client-event/entities/client-event.entity';
import { Company } from 'src/api/companies/entities/company.entity';
import { Role } from 'src/api/roles/entities/role.entity';

export class CreateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  email: string;

  @MinLength(8)
  password: string;

  @IsNotEmpty()
  phoneNumber: string;

  role: Role;

  company: Company;

  events: ClientEvent[];
}
