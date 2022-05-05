import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../api/users/users.service';
import { constants } from '../../utils/constants';

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: constants.JWT_TOKEN,
      ignoreExpiration: false,
    });
  }
  async validate(payload: any) {
    const user = this.usersService.findOne(payload.id);
    if (!user) {
      throw new UnauthorizedException('Not authorized');
    } else {
      return payload;
    }
  }
}
