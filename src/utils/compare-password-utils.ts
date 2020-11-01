
import * as bcrypt from "bcrypt";

/**
 * Compare password with password hash.
 */
export function comparePassword(passwordHash: string, passwordToTest: string): Promise<boolean> {
    return bcrypt.compare(passwordToTest, passwordHash);
}
