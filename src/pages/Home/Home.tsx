import { useEffect } from 'react';

import { AddTodo } from '../../components/AddTodo/AddTodo';
import { TodoList } from '../../components/TodoList/TodoList';
import { getTodosRoutine } from '../../store/features/todo/todo.routines';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';

export const Home = () => {

  const dispatch = useAppDispatch();
  const {isLoading, error} = useAppSelector((state) => state.todos);


  useEffect(() => {
    dispatch(getTodosRoutine())
  }, []); // eslint-disable-line

  if (error) return <h1>{error}</h1>
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};
