import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Tasks} from "./tasks.entity";
import {Repository} from "typeorm";
import {TaskDto} from "./tasks.dto";
import {CategoriesService} from "../categories/categories.service";

@Injectable()
export class TasksService {
    constructor(private categoriesService: CategoriesService,@InjectRepository(Tasks) private tasksRepository: Repository<Tasks>) {
    }
    async getTasks(){
        return await this.tasksRepository.find()
    }
    async createTasks(task:TaskDto){
        console.log("task.categoryID",task)
        const category = await this.categoriesService.getCategory(task.categoryID)
        if (!category) throw new HttpException('Category not found', HttpStatus.BAD_REQUEST)
        const newTask = new Tasks()
        newTask.name = task.name
        newTask.category = category
        newTask.price = task.price
        newTask.description = task.description
        return this.tasksRepository.save(newTask)
    }
}