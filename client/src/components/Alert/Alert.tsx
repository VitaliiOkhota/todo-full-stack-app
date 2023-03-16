import React from 'react';
import {IAlertState} from '../../types/types';
import './styles.css';
import {useDispatch} from 'react-redux';
import {hideAlert} from '../../redux/actions';


interface IAlertProps {
    props: IAlertState
}

const Alert = ({props}: IAlertProps) => {
    const dispatch = useDispatch()

    const handleAlertClose = () => {
        dispatch(hideAlert())
    }

    return (
        <div className={`alert alert-wrapper alert-${props.alertStatus}`}>
            {props.alertText}
            <button className={'btn-close alert-btn'} onClick={handleAlertClose} />
        </div>
    );
};

export default Alert;