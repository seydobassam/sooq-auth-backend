import { AuthDTO } from './dtos/auth.dto';
import { User } from './../users/entities/user.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OAuth2Client } from 'google-auth-library/build/src/auth/oauth2client';
import { LoginTicket } from 'google-auth-library/build/src/auth/loginticket';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private client: OAuth2Client,
    ) { }


    /**
     * Generate auth token for user.
    */
    private generateToken(id: number): string {
        return this.jwtService.sign({ id });
    }

    public async login(email: string, password: string): Promise<AuthDTO> {
        const user: User = await this.usersService.findOneLocal(email);
        //const passwordMatches: boolean = await comparePassword(user.password, password);

        if (!user || user == undefined) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        if (user.password !== password) {
            throw new HttpException("Wrong Password", HttpStatus.NOT_FOUND);
        }
        return { token: this.generateToken(user.id) };
    }


    public async loginWithGoogle(idToken: string): Promise<AuthDTO> {
        const ticket: LoginTicket = await this.client.verifyIdToken({
            idToken: idToken,
            // set IOS OR ANDROID CLIENT ID
            audience: "780423719558-2gbkve7moodvuoagh2srfb5cofke35le.apps.googleusercontent.com",
        });
        console.log(ticket);
        return { token: "sdcsdlckhaosdhabsdiauszcoqwoidhoiqpo" };
    }

}
