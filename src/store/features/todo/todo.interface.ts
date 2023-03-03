import { ITodoDto } from '../../../types/todoList/todoList.interface';

export interface IInitialState {
  todoList: ITodoDto[];
  isLoading: boolean;
  error: null | string;
}
