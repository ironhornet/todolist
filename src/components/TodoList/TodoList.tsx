import { reverse } from 'ramda';

import { List } from './todoList.styles';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todoList);

  return (
    <List>
      {reverse(todos).map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};
