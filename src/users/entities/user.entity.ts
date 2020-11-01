import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

/**
 * User class.
 */

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    avatar: string;

    @Column()
    email: string;

    @BeforeInsert()
    private hashPassword(): void {
      this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    password: string;
}
