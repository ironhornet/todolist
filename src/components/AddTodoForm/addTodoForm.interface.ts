export interface IFormValues {
  title: string;
  content: string;
}
export interface IAddTodoFormProps {
  onModalClose: (value: boolean) => void;
  handleCreateTodo: (values: IFormValues) => void;
}
