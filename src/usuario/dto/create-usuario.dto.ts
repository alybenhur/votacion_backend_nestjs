import { IsEmail, IsNotEmpty, isNotEmpty, IsNumber } from "class-validator";

export class CreateUsuarioDto {
  
    @IsNumber()
    cedula : number

    @IsNotEmpty()
    nombre : string  

    @IsEmail()
    email: string;

    @IsNumber()
    edad: number
  
    

}
