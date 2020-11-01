import { AuthService } from './auth.service';
import { Controller,Post, Body, HttpStatus, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDTO } from './dtos/auth.dto';
import { CredentialsDTO } from './dtos/credentials.dto';
import { GoogleDTO } from './dtos/google-dto';

@Controller()
export class AuthController {

    public constructor(private authService: AuthService) {
        // Empty
    }

    // login with app
    @Post("user_Token")
    @UsePipes(new ValidationPipe())
    @HttpCode(HttpStatus.OK)
    public async login(@Body() body: CredentialsDTO): Promise<AuthDTO> {
        return this.authService.login(body.email, body.password);
    }

    // login with google
    @Post('google/login')
    @UsePipes(new ValidationPipe())
    @HttpCode(HttpStatus.OK)
    public async verifyUserIdToken(@Body() body: GoogleDTO): Promise<AuthDTO> {
        console.log(body);
        return this.authService.loginWithGoogle(body.idToken);
    }

}


