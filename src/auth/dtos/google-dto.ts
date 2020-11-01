import { IsString, IsNotEmpty } from "class-validator";

/**
 * Google credentials.
 */
export class GoogleDTO {
    /** idToken */
    @IsString()
    @IsNotEmpty()
    public idToken: string;
}
