import styled from '@emotion/styled';
import { Button } from 'rsuite';
import FormHelpText from 'rsuite/esm/FormHelpText';

export const formStyles = `display: flex;
flex-direction: column;
align-items: center;
width: 80%;

.rs-form-group,
.todoTitleInput,
.rs-form-control {
  width: 100% !important;
}
`;
export const StyledError = styled(FormHelpText)`
  color: red !important;
`;
export const StyledSubmitButton = styled(Button)`
  width: 150px;
  text-align: center;
  margin-right: 15px;
  display: block !important;
`;
