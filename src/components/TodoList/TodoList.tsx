import { reverse } from 'ramda';

import './todoList.scss';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todoList);

  return (
    <ul className='list'>
      {reverse(todos).map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
