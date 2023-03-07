import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddTodoButton } from './addTodo.style';
import { addTodo } from '../../store/features/todo/todo.slice';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { IFormValues } from '../AddTodoForm/addTodoForm.interface';
import { ModalPopup } from '../ModalPopup/ModalPopup';

export const AddTodo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const manageModal = (value: boolean) => setIsOpen(value);

  const handleCreateTodo = (values: IFormValues) => {
    dispatch(
      addTodo({
        id: uuidv4(),
        title: values.title,
        content: values.content ? values.content : '',
        done: false,
      })
    );
    manageModal(false);
  };

  return (
    <>
      <AddTodoButton
        size='lg'
        appearance='primary'
        onClick={() => manageModal(true)}
      >
        Add new Todo
      </AddTodoButton>

      <ModalPopup title='Add new todo' open={isOpen} onChange={manageModal}>
        <AddTodoForm
          handleCreateTodo={handleCreateTodo}
          onModalClose={manageModal}
        />
      </ModalPopup>
    </>
  );
};
