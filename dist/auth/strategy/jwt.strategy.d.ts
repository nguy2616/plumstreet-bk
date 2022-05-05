import { Strategy } from 'passport-jwt';
import { UsersService } from '../../api/users/users.service';
declare const jwtStrategy_base: new (...args: any[]) => Strategy;
export declare class jwtStrategy extends jwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: any): Promise<any>;
}
export {};
