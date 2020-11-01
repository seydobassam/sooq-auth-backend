import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';




@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    private readonly users: any[];
    constructor(
        @InjectRepository(User) repo: Repository<User>,
    ) {
        super(repo),
        this.users = [
            {
                id: 1,
                avatar: "",
                email: 'john',
                password: 'changeme',
            },
            {
                id: 2,
                avatar: "",
                email: 'chris',
                password: 'secret',
            },
            {
                id: 3,
                avatar: "",
                email: 'maria',
                password: 'guess',
            },
        ];
    }

    public async findOneLocal(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email == email);
    }

}
