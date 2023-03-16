import React, {useEffect} from 'react';
import {Header} from './components/Header/Header';
import {TodoForm} from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import {useDispatch} from 'react-redux';
import {getTodos} from './redux/actions';
import './App.css';

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodos())
    }, [])
  return (
    <>
      <Header />
      <main>
          <section>
              <div className="container" style={{paddingTop: '30px'}}>
                  <TodoForm />
                  <h2 style={{paddingTop: '30px'}}>Мої справи:</h2>
                  <TodoList />
              </div>
          </section>
      </main>
    </>
  );
}

export default App;
