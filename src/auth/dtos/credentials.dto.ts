

import { IsString, IsNotEmpty } from "class-validator";

/**
 * User credentials.
 */
export class CredentialsDTO {
    /** Email */
    @IsString()
    @IsNotEmpty()
    public email: string;
    /** Password */
    @IsString()
    @IsNotEmpty()
    public password: string;
}
