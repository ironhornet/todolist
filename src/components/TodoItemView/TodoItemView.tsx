import { FC } from 'react';
import { Input } from 'rsuite';
import clsx from 'clsx';

import './todoItemView.scss';
import { ITodoItemViewProps } from './todoItemView.interface';
import { Checkbox } from '../Checkbox/Checkbox';
import { ReactComponent as PencilSvg } from '../../assets/svg/pencil.svg';
import { ReactComponent as BinSvg } from '../../assets/svg/bin.svg';
import { ReactComponent as CancelSvg } from '../../assets/svg/xMark.svg';
import { ReactComponent as SaveSvg } from '../../assets/svg/save.svg';
import { TextArea } from '../TextArea/TextArea';

export const TodoItemView: FC<ITodoItemViewProps> = (props) => {
  const {
    todo,
    isEditing,
    contentValue,
    titleValue,
    handleDone,
    handleEdit,
    manageModal,
    handleContentChange,
    handleTitleChange,
    handleSave,
  } = props;

  const styles = clsx('todoContainer', { todoCompleted: todo.done });

  const handleCheckboxChange = (checked: boolean) => {
    handleDone({ ...todo, done: checked });
  };

  return (
    <article className={styles}>
      <div className='todoContentWrapper'>
        <Checkbox
          checked={todo.done}
          onChange={handleCheckboxChange}
          id={todo.id}
        />

        <div className='textWrapper'>
          {isEditing && (
            <Input value={titleValue} onChange={handleTitleChange} />
          )}

          {isEditing && (
            <TextArea
              id='editTextArea'
              value={contentValue}
              handleChange={handleContentChange}
            />
          )}

          {!isEditing && <h3 className='title'>{todo.title}</h3>}
          {!isEditing && <p className='text'>{todo.content}</p>}
        </div>
      </div>

      <div className='buttons'>
        {!isEditing && (
          <>
            <button
              className='btn editBtn'
              onClick={handleEdit}
              disabled={todo.done}
            >
              <PencilSvg width={30} height={30} cursor='pointer' />
            </button>
            <button className='btn' onClick={() => manageModal(true)}>
              <BinSvg width={30} height={30} cursor='pointer' />
            </button>
          </>
        )}

        {isEditing && (
          <>
            <button className='btn saveBtn' onClick={() => handleSave(todo)}>
              <SaveSvg width={30} height={30} cursor='pointer' />
            </button>
            <button className='btn' onClick={handleEdit}>
              <CancelSvg width={30} height={30} cursor='pointer' />
            </button>
          </>
        )}
      </div>
    </article>
  );
};
