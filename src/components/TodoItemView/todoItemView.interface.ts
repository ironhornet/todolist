import { ITodoDto } from '../../types/todoList/todoList.interface';

export interface ITodoItemViewProps {
  todo: ITodoDto;
  isEditing: boolean;
  contentValue: string;
  titleValue: string;
  handleDone: (todo: ITodoDto) => void;
  handleEdit: () => void;
  manageModal: (value: boolean) => void;
  handleContentChange: (value: string) => void;
  handleTitleChange: (value: string) => void;
  handleSave: (todo: ITodoDto) => void;
}
