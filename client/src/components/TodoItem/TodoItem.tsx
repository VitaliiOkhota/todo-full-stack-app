import React, { ChangeEvent, FocusEventHandler, useState } from 'react';
import './styles.css';
import { ITodo } from '../../types/types';

interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void;
    doneTodo: (arg0: string, arg1: boolean) => void;
    changeTodo: (arg0: string, arg1: boolean, arg2: string) => void;
}

const TodoItem = ({ todo, deleteTodo, doneTodo, changeTodo }: ITodoProps) => {
    const [isTodoEdit, setTodoEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changeTodo(newTitle, todo.done, todo.id);
            setTodoEdit(false);
        }
    };

    const handleSubmitFocus: FocusEventHandler<HTMLInputElement> = (event) => {
        if (event.type === 'blur') {
            changeTodo(newTitle, todo.done, todo.id);
            setTodoEdit(false);
        }
    };

    const handleTodoEdit = () => setTodoEdit(!isTodoEdit);
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value);
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done);

    const titleContent = isTodoEdit ? (
        <input className={'input form-control'} type="text" value={newTitle} onChange={handleTitleChange} onBlur={handleSubmitFocus} autoFocus />
    ) : (
        <span onClick={handleTodoEdit} className={`${todo.done ? 'title-done' : ''}`}>
      {todo.title}
    </span>
    );

    return (
        <li
            className={`todo-item list-group-item d-flex justify-content-between align-items-center ${
                todo.done ? 'list-group-item-success' : ''
            }`}
        >
            <div className={'todo-text'} onKeyPress={handleSubmit}>
                {titleContent}
            </div>
            <div className={'todo-btns'}>
                <button className="todo-btn btn btn-primary" onClick={handleTodoEdit}>
                    Змінити
                </button>

                <button className="todo-btn btn btn-success" onClick={handleComplete}>
                    Завершити
                </button>

                <button className="btn btn-danger" onClick={handleDelete}>
                    Видалити
                </button>
            </div>
        </li>
    );
};

export default TodoItem;

/*import React, {ChangeEvent, FocusEventHandler, useState} from 'react';
import './styles.css'
import {ITodo} from '../../types/types';
import { title } from 'process';

interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void;
    doneTodo: (arg0: string, arg1: boolean) => void;
    changeTodo: (arg0: string, arg1: boolean, arg2: string) => void;
}

const TodoItem = ({todo, deleteTodo, doneTodo, changeTodo}: ITodoProps) => {

    const [isTodoEdit, setTodoEdit] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changeTodo(newTitle, todo.done, todo.id)
            setTodoEdit(false)
        }
    }

    const handleSubmitFocus: FocusEventHandler<HTMLInputElement> = (event) => {
        if (event.type === "blur") {
            changeTodo(newTitle, todo.done, todo.id);
            setTodoEdit(false);
        }
    };

    const handleTodoEdit = () => setTodoEdit(!isTodoEdit)
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done);

    const titleContent = isTodoEdit
        ? <input type="text" value={newTitle} onChange={handleTitleChange} onBlur={handleSubmitFocus} autoFocus />
        : <span onClick={handleTodoEdit} className={`${todo.done ? 'title-done' : ''}`}>{todo.title}</span>;

    return (
        <li className={`todo-item list-group-item d-flex justify-content-between align-items-center ${todo.done ? 'list-group-item-success' : ''}`}>
            <div className={'todo-text'} onKeyPress={handleSubmit}>
                {titleContent}
            </div>
            <div className={'todo-btns'}>
                <button
                    className="todo-btn btn btn-primary"
                    onClick={handleTodoEdit}
                >
                    Змінити
                </button>

                <button
                    className="todo-btn btn btn-success"
                    onClick={handleComplete}
                >
                    Завершити
                </button>

                <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    Видалити
                </button>
            </div>
        </li>

    );
};

export default TodoItem;*/


/*
import React, {
    ChangeEvent, useState
} from 'react';
import './styles.css'
import {
    ITodo
} from '../../types/types';

interface ITodoProps {
    todo: ITodo;
    deleteTodo: (arg0: string) => void;
    doneTodo: (arg0: string, arg1: boolean) => void;
    changeTodo: (arg0: string, arg1: boolean, arg2: string) => void;
}

const TodoItem = ({
    todo, deleteTodo, doneTodo, changeTodo
}: ITodoProps) => {

    const [isTodoEdit, setTodoEdit] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            changeTodo(newTitle, todo.done, todo.id)
            setTodoEdit(!isTodoEdit)
        }
    }

    const handleTodoEdit = () => setTodoEdit(!isTodoEdit)
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => setNewTitle(event.target.value)
    const handleDelete = () => deleteTodo(todo.id);
    const handleComplete = () => doneTodo(todo.id, !todo.done);

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.done ? 'list-group-item-success' : ''}`}>
            <div onKeyPress={handleSubmit}>
                {
                    isTodoEdit
                        ? <input type="text" onChange={handleTitleChange}/>
                        : <span className={`${todo.done ? 'title-done' : ''}`}>{todo.title}</span>
                }
            </div>
            <div>
                <button
                    className="btn btn-primary"
                    style={{marginRight: '10px'}}
                    onClick={handleTodoEdit}
                >
                    Змінити
                </button>

                <button
                    className="btn btn-success"
                    style={{marginRight: '10px'}}
                    onClick={handleComplete}
                >
                    Завершити
                </button>

                <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                >
                    Видалити
                </button>
            </div>
        </li>
    );
};

export default TodoItem;*/

