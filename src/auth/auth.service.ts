import { createLoginDto } from './dto/create.login.dto';
import { UsersService } from './../users/users.service';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { createUserDto } from 'src/users/dto/create.user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService ) {}

    async login ( userDto: createLoginDto){
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
        return this.generateToken(user)
    }

    async generateToken(user){
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload),
            id: payload.id
        }
    }

    async validateUser(userDto: createLoginDto){
        const user = await this.userService.getUserByEmail(userDto.email)
        if (!user) throw new UnauthorizedException({message: 'This Email is not find'});
        const passEq = await bcrypt.compare(userDto.password, user.password)
        if (user && passEq) {
            return user;
        }
        throw new UnauthorizedException({message: 'Incorect Password'})
    }

    async getByToken(token: string){
        const user = await this.jwtService.decode(token)
        if (user === null) throw new UnauthorizedException({message: 'Incorect Token'})
        return user 
    }

    
}
