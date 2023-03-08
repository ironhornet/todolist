export interface ITodoElementProps {
  id: string;
  title: string;
  content?: string;
  done: boolean;
}

export interface IExhanceComponentProps extends ITodoElementProps {
  contentValue: string;
  titleValue: string;
  isOpen: boolean;
  isEditing: boolean;
  setContentValue: (value: string) => { contentValue: string };
  setTitleValue: (value: string) => { titleValue: string };
  setIsOpen: (value: boolean) => { isOpen: boolean };
  setIsEditing: (value: boolean) => { isEditing: boolean };
  handleContentChange: (value: string) => void;
  handleTitleChange: (value: string) => void;
  manageModal: (value: boolean) => void;
  handleEdit: () => void;
  handleDone: (todo: ITodoElementProps) => void;
}
