import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Tasks} from "./tasks.entity";
import {Repository} from "typeorm";
import {TaskDto} from "./tasks.dto";
import {CategoriesService} from "../categories/categories.service";
import {UsersService} from "../users/users.service";

@Injectable()
export class TasksService {
    constructor(
        private categoriesService: CategoriesService,
        private usersService: UsersService,
        @InjectRepository(Tasks) private tasksRepository: Repository<Tasks>
    ) {
    }

    async getTasks() {
        return await this.tasksRepository.find()
    }

    async createTasks(task: TaskDto, userID: number) {
        const category = await this.categoriesService.getCategory(task.categoryID)
        if (!category) throw new HttpException('Category not found', HttpStatus.BAD_REQUEST)
        const newTask = new Tasks()
        newTask.name = task.name
        newTask.category = category
        newTask.price = task.price
        newTask.description = task.description
        newTask.user = await this.usersService.findById(userID)
        return await this.tasksRepository.save(newTask)
    }
}