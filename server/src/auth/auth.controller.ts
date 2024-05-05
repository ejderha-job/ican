import {Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from "../guard/local-auth.guard";
import {GithubAuthGuard} from "../guard/github-auth";
import {AuthService} from "./auth.service";
import {CreateUser} from "../dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() user:CreateUser) {
        const userID = await this.authService.register(user);
        if (userID) return userID
        throw new HttpException("Не удалось создать пользователя", HttpStatus.BAD_REQUEST)
    }

    @UseGuards(GithubAuthGuard)
    @Get('github')
    async getProfile(@Req() req) {
        return req.user
    }

    @UseGuards(GithubAuthGuard)
    @Get('github/callback')
    async callback(@Req() req, @Res() res) {
        const {id, login} = req.user
        const accessToken = await this.authService.login({id, login})
        return res.json({accessToken: accessToken})
    }
}
