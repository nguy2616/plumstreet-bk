import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../api/users/dto/create-user.dto';
import { UsersService } from '../api/users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(data: CreateUserDto): Promise<{
        token: string;
        user: import("../api/users/entities/user.entity").User;
    }>;
    login(user: any): Promise<{
        token: string;
        user: any;
    }>;
    checkAuthenticated(email: string, plainPassword: string): Promise<any>;
    private checkPassword;
    getCookieWithJwtToken(id: number): Promise<string>;
}
