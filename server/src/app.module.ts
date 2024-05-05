import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CountriesModule } from './countries/countries.module';
import {Countries} from "./countries/countries.entity";
import { CategoriesModule } from './categories/categories.module';
import {Categories} from "./categories/categories.entity";
import {Tasks} from "./tasks/tasks.entity";
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {Users} from "./users/users.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      port: 5432,
      entities: [Countries, Categories, Tasks, Users],
      synchronize: true,
    }),
    CountriesModule,
    CategoriesModule,
    TasksModule,
    AuthModule,
    UsersModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
