import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createTodo, showAlert} from '../../redux/actions';
import {IAlertReducer} from '../../types/types';
import Alert from '../Alert/Alert';

export const TodoForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const alertState = useSelector((state: IAlertReducer) => state.alertReducer)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!title.trim()) {
            dispatch(showAlert('Назва справи не може бути пустою', 'warning'))
            return
        }
        dispatch(createTodo(title));
        setTitle('');
    }

    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} >
            <div style={{height: '100px'}}>
                {alertState.alertText.length > 0 && <Alert props={alertState} />}
            </div>
            <div className='d-flex justify-content-between align-items-end'>
                <div className="form-group" style={{width: '90%', marginRight: '10px'}}>
                    <label htmlFor="" className="form-label">Введіть назву справи:</label>
                    <input onChange={handleChangeInputValue} type="text" value={title} className="form-control" />
                </div>
                <button className="btn btn-success">Створити</button>
            </div>
        </form>
    );
};