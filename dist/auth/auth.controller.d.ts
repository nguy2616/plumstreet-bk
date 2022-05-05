import { CreateUserDto } from '../api/users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(user: CreateUserDto): Promise<any>;
    login(req: any): Promise<any>;
}
