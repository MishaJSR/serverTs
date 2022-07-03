import { Controller, Get } from "@nestjs/common";


@Controller('/users')
export class UsersController{
    create(){

    }

    @Get()
    getAll(){
        return 'Work'
    }
    getOne(){
        
    }
    delete(){
        
    }
}