import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CountriesModule } from './countries/countries.module';
import { CategoriesModule } from './categories/categories.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {dataSource} from "./db/ormconfig";
import { SubcategoriesModule } from './subcategories/subcategories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource),
    CountriesModule,
    CategoriesModule,
    TasksModule,
    AuthModule,
    UsersModule,
    SubcategoriesModule,
  ],
})
export class AppModule {}
