import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { OAuth2Client } from 'google-auth-library/build/src/auth/oauth2client';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt-strategy';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forFeature([User]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
            secret: "VrrCnQMllSsbYF4tuEiqdB5irzBqaxUz8R",
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, OAuth2Client, JwtStrategy],
    exports: [AuthService, PassportModule],
})

export class AuthModule { }
