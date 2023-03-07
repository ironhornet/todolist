import styled from '@emotion/styled';

export const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 6px;
  padding: 7px 11px;
  outline: none;
  color: #575757;
  background-color: #fff;
  border: 1px solid #e5e5ea;
  font-family: sans-serif;
  font-size: 14px;
  resize: none;

  &:hover {
    border-color: #3498ff;
  }
  &:focus {
    outline: 3px solid rgba(52, 152, 255, 0.25);
    border-color: #3498ff;
  }
`;
