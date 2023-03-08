import { reverse } from 'ramda';
import { compose, withProps } from 'recompose';

import { List } from './todoList.styles';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { TodoItem } from '../TodoItem/TodoItem';
import { ITodoDto } from '../../types/todoList/todoList.interface';

interface IProps  {
  todos: ITodoDto[];
};

const enhanceComponent = compose<IProps, {}>(
  withProps(() => ({
    todos: useAppSelector((state) => state.todos.todoList),
  }))
);


export const TodoList = enhanceComponent(({ todos }) => (
  <List>
    {reverse(todos).map((todo) => (
      <TodoItem key={todo.id} {...todo} />
    ))}
  </List>
));

