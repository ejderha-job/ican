import { Module } from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Tasks} from "./tasks.entity";
import {CategoriesModule} from "../categories/categories.module";
import {TasksController} from "./tasks.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Tasks]), CategoriesModule],
    providers:[TasksService],
    controllers:[TasksController],
})
export class TasksModule {

}
