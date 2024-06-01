import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {JwtAuthGuard} from "../guard/jwt-auth.guard";
import {createTaskDTO} from "./dto/tasks.dto";

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    async createTasks(@Body() task:createTaskDTO, @Req() req){
        return this.tasksService.createTasks(task, req.user.id)
    }
    @Get()
    async getTasks(){
        return this.tasksService.getTasks()
    }
}
