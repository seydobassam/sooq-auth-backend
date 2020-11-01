import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
