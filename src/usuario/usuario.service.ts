import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  personas = []
  create(createUsuarioDto: CreateUsuarioDto) {
    this.personas.push(createUsuarioDto)
    return 'Usuario creado con exito....';
  }

  findAll() {
    return this.personas;
  }

  findOne(id: number) {
    return this.personas.find(item => item.cedula == id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
