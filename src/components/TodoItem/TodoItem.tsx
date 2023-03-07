import { FC, useState } from 'react';
import { Button } from 'rsuite';

import { deleteTodo, updateTodo } from '../../store/features/todo/todo.slice';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { ITodoDto } from '../../types/todoList/todoList.interface';
import { ModalPopup } from '../ModalPopup/ModalPopup';
import { TodoItemView } from '../TodoItemView/TodoItemView';
import { ITodoElementProps } from './todoItem.interface';

export const TodoItem: FC<ITodoElementProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [contentValue, setcontentValue] = useState(props.content || '');
  const [titleValue, setTitleValue] = useState(props.title);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleDone = (todo: ITodoDto) => {
    setIsEditing(false)
    dispatch(updateTodo(todo));
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleConfirmDelete = () => {
    dispatch(deleteTodo(props.id));

    setIsOpen(false);
  };
  const manageModal = (value: boolean) => {
    setIsOpen(value);
  };
  const handleSave = (todo: ITodoDto) => {
    if (!titleValue) return;

    dispatch(updateTodo({ ...todo, content: contentValue, title: titleValue }));
    setIsEditing(false);
  };
  const handleContentChange = (value: string) => {
    if (contentValue.length <= 300) setcontentValue(value);
  };
  const handleTitleChange = (value: string) => {
    if (titleValue.length <= 80) setTitleValue(value);
  };
  

  return (
    <li>
      <TodoItemView
        handleDone={handleDone}
        handleEdit={handleEdit}
        manageModal={manageModal}
        handleContentChange={handleContentChange}
        handleTitleChange={handleTitleChange}
        handleSave={handleSave}
        isEditing={isEditing}
        contentValue={contentValue}
        titleValue={titleValue}
        todo={props}
      />

      <ModalPopup
        open={isOpen}
        title='Are you sure you wanna delete it?'
        onChange={manageModal}
      >
        <p>{props.title}</p>

        <div className='modalControls'>
          <Button onClick={handleConfirmDelete} appearance='primary'>
            Yes, delete it!
          </Button>

          <Button onClick={() => manageModal(false)} appearance='subtle'>
            Cancel
          </Button>
        </div>
      </ModalPopup>
    </li>
  );
};
