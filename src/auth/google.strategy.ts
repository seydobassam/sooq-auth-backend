/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

/*     constructor() {
        super({
            clientID: '780423719558-oc1jfee5tm5pe74pmbv30ms4cpqkrggs.apps.googleusercontent.com',
            clientSecret: 'cTaHfj-LV6bptyqYo7qvpt8b',
            passReqToCallback: false,
            scope: ['profile'],
        });
    };
 */
/*
    public async validate(profile: object, done: Function): Promise<void> {
        console.log("validate");
        try {
            console.log(profile);
            const jwt = 'placeholderJWT'
            const user = { jwt }
            done(null, user);
        }
        catch (err) {
            done(err, false);
        }
    } */

}
