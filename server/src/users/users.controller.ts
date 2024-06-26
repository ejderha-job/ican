import {Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async users(){
        return await this.usersService.find()
    }
}
