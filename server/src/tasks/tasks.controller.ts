import {Body, Controller, Get, Post} from '@nestjs/common';
import {TaskDto} from "./tasks.dto";
import {TasksService} from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }
    @Post()
    async createTasks(@Body() task:TaskDto){
        return this.tasksService.createTasks(task)
    }
    @Get()
    async getTasks(){
        return this.tasksService.getTasks()
    }
}
