import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import tokenPayload from './interface/token.interface';
import { CreateUserDto } from '../api/users/dto/create-user.dto';
import { UsersService } from '../api/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(data: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    try {
      const user = await this.usersService.create({
        ...data,
        password: hashedPassword,
      });
      user.password = undefined;
      const token = await this.getCookieWithJwtToken(user.id);
      return { token, user };
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }
  public async login(user) {
    const token = await this.getCookieWithJwtToken(user.id);
    return { token, user };
  }

  public async checkAuthenticated(email: string, plainPassword: string) {
    try {
      const user = await this.usersService.findByEmail(email);
      await this.checkPassword(plainPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {
      return error;
    }
  }
  private async checkPassword(plainPassword: string, hashedPassword: string) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    if (isMatch) {
      return isMatch;
    } else {
      throw new HttpException('Wrong credentials', HttpStatus.BAD_REQUEST);
    }
  }

  public async getCookieWithJwtToken(id: number) {
    const payload: tokenPayload = { id };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}
