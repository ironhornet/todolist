import { FC, useMemo } from 'react';
import { Input } from 'rsuite';
import styled from '@emotion/styled';

import {
  styldContainerStylee,
  StyledButton,
  StyledContentWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTitle,
} from './todoItemView.style';
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

  const handleCheckboxChange = (checked: boolean) => {
    handleDone({ ...todo, done: checked });
  };

  const StyledTodoContainer = useMemo(
    () => styled.article`
      ${styldContainerStylee}
      ${todo.done && `text-decoration: line-through; opacity: 0.6;`}
    `,
    [todo.done]
  );

  return (
    <StyledTodoContainer>
      <StyledContentWrapper>
        <Checkbox
          checked={todo.done}
          onChange={handleCheckboxChange}
          id={todo.id}
        />

        <StyledTextWrapper>
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

          {!isEditing && <StyledTitle>{todo.title}</StyledTitle>}
          {!isEditing && <StyledText>{todo.content}</StyledText>}
        </StyledTextWrapper>
      </StyledContentWrapper>

      {!isEditing && (
        <>
          <StyledButton onClick={handleEdit} disabled={todo.done}>
            <PencilSvg width={30} height={30} cursor='pointer' />
          </StyledButton>
          <button onClick={() => manageModal(true)}>
            <BinSvg width={30} height={30} cursor='pointer' />
          </button>
        </>
      )}

      {isEditing && (
        <>
          <StyledButton onClick={() => handleSave(todo)}>
            <SaveSvg width={30} height={30} cursor='pointer' />
          </StyledButton>
          <button onClick={handleEdit}>
            <CancelSvg width={30} height={30} cursor='pointer' />
          </button>
        </>
      )}
    </StyledTodoContainer>
  );
};
