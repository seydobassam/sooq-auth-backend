import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, BadRequestException } from '@nestjs/common';
import { AuthPayloadDTO } from './dtos/auth-payload-dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private usersService: UsersService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "VrrCnQMllSsbYF4tuEiqdB5irzBqaxUz8R",
        });
    }

    /**
     * Validate user.
     */
    public async validate(payload: AuthPayloadDTO): Promise<User> {
        return this.usersService.findOneLocal(payload.email).catch(() => {
            throw new BadRequestException("User not found");
        });
    }
}
