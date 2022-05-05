import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../api/users/dto/create-user.dto';

import { AuthService } from './auth.service';
import { LocalGuard } from './guard/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('local/register')
  async register(@Body() user: CreateUserDto) {
    try {
      return await this.authService.register(user);
    } catch (error) {
      return error;
    }
  }

  @HttpCode(200)
  @UseGuards(LocalGuard)
  @Post('local')
  async login(@Request() req) {
    try {
      return await this.authService.login(req.user);
    } catch (error) {
      return error;
    }
  }
}
