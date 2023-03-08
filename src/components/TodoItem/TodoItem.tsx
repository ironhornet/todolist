import { compose, withStateHandlers, withHandlers, lifecycle } from 'recompose';
import { Button } from 'rsuite';

import { deleteTodo, updateTodo } from '../../store/features/todo/todo.slice';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { ITodoDto } from '../../types/todoList/todoList.interface';
import { ModalPopup } from '../ModalPopup/ModalPopup';
import { TodoItemView } from '../TodoItemView/TodoItemView';
import { IExhanceComponentProps } from './todoItem.interface';

const exhanceComponent = compose<IExhanceComponentProps, {}>(
  withStateHandlers(
    {
      contentValue: '',
      titleValue: '',
      isOpen: false,
      isEditing: false,
    },
    {
      setContentValue: () => (value) => ({ contentValue: value }),
      setTitleValue: () => (value) => ({ titleValue: value }),
      setIsOpen: () => (value) => ({ isOpen: value }),
      setIsEditing: () => (value) => ({ isEditing: value }),
    }
  ),
  lifecycle<IExhanceComponentProps, {}>({
    componentDidMount() {
      const { content, title, setContentValue, setTitleValue } = this.props;
      if (content) setContentValue(content);
      setTitleValue(title);
    },
  }),

  withHandlers<IExhanceComponentProps, {}>({
    handleContentChange:
      ({ setContentValue }) =>
      (value: string) => {
        if (value.length <= 300) setContentValue(value);
      },
    handleTitleChange:
      ({ setTitleValue }) =>
      (value: string) => {
        if (value.length <= 80) setTitleValue(value);
      },
    manageModal:
      ({ setIsOpen }) =>
      (value: boolean) => {
        setIsOpen(value);
      },
    handleEdit:
      ({ setIsEditing, isEditing }) =>
      () => {
        setIsEditing(!isEditing);
      },
  })
);

export const TodoItem = exhanceComponent((props) => {
  const {
    contentValue,
    titleValue,
    isOpen,
    id,
    title,
    content,
    done,
    isEditing,
    handleContentChange,
    handleTitleChange,
    setIsEditing,
    manageModal,
    handleEdit,
    setIsOpen,
  } = props;

  const dispatch = useAppDispatch();

  const handleDone = (todo: ITodoDto) => {
    setIsEditing(false);
    dispatch(updateTodo(todo));
  };

  const handleConfirmDelete = () => {
    dispatch(deleteTodo(props.id));

    setIsOpen(false);
  };

  const handleSave = (todo: ITodoDto) => {
    if (!titleValue) return;

    dispatch(updateTodo({ ...todo, content: contentValue, title: titleValue }));
    setIsEditing(false);
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
        todo={{ id, title, content, done }}
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
});
