import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Tasks } from "./tasks.entity";
import { In, Repository } from "typeorm";
import { UsersService } from "../users/users.service";
import { createTaskDTO, getTaskDTO } from "./dto/tasks.dto";
import { SubcategoriesService } from "../subcategories/subcategories.service";

@Injectable()
export class TasksService {
    constructor(
        private subcategoriesService: SubcategoriesService,
        private usersService: UsersService,
        @InjectRepository(Tasks) private tasksRepository: Repository<Tasks>
    ) {
    }

    async getTasks(dto: getTaskDTO) {
        if (dto.subcategoriesIDs) {
            return await this.tasksRepository.find({ where: { id: In(dto.subcategoriesIDs) } })
        }
        return await this.tasksRepository.find()
    }


    async createTasks(task: createTaskDTO, userID: number) {
        const Subcategory = await this.subcategoriesService.findOne(task.categoryID)
        if (!Subcategory) throw new HttpException('Category not found', HttpStatus.BAD_REQUEST)
        const newTask = new Tasks()
        newTask.props = {
            name: task.task.name,
            price: task.task.price,
            description: task.task.description
        }
        newTask.Subcategory = Subcategory
        newTask.user = await this.usersService.findById(userID)
        return await this.tasksRepository.save(newTask)
    }
}