import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CountriesModule } from './countries/countries.module';
import { CategoriesModule } from './categories/categories.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'db',
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      port: 5432,
      entities: ["**/*.entity{ .ts,.js}"],
      synchronize: true
    }),
    CountriesModule,
    CategoriesModule,
    TasksModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
