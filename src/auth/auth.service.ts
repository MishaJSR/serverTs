import { UsersService } from './../users/users.service';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { createUserDto } from 'src/users/dto/create.user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService ) {}

    async login ( userDto: createUserDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration( userDto: createUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('User is already register', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        const info = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    async generateToken(user){
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload),
            id: payload.id
        }
    }

    async validateUser(userDto: createUserDto){
        const user = await this.userService.getUserByEmail(userDto.email)
        const passEq = await bcrypt.compare(userDto.password, user.password)
        if (user && passEq) {
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректный емайл или пароль'})
    }

    async getByToken(token: string){
        const user = await this.jwtService.decode(token)
        return user 
    }

    
}
