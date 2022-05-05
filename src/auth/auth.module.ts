import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CompaniesModule } from 'src/api/companies/companies.module';
import { RolesModule } from 'src/api/roles/roles.module';
import { UsersModule } from 'src/api/users/users.module';
import { constants } from 'src/utils/constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    UsersModule,
    RolesModule,
    CompaniesModule,
    PassportModule,
    JwtModule.register({
      secret: constants.JWT_TOKEN,
      signOptions: { expiresIn: constants.JWT_EXPIRE_TIME },
    }),
  ],
  providers: [AuthService, LocalStrategy, jwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
