import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Todo} from './models/todo.model';
import {CreateTodoDto} from './dto/create-todo.dto';
import {ChangeTodoDto} from './dto/change-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo) private todoModel: typeof Todo) {}

    async findAll(): Promise<Todo[]> {
        return this.todoModel.findAll();
    }

    async findOne(id: string): Promise<Todo> {
        return this.todoModel.findOne({where: {id}})
    }

    async create(CreateTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = new Todo();
        todo.title = CreateTodoDto.title;
        todo.done = CreateTodoDto.done;
        return todo.save()
    }

    async update(id: string, ChangeTodoDto: ChangeTodoDto): Promise<[affectedCount: number, affectedRows: Todo[]]> {
        return this.todoModel.update({...ChangeTodoDto}, {where: {id}, returning: true})
    }

    async remove(id: string): Promise<void> {
        const todo = await this.findOne(id);
        await todo.destroy();
    }
}
