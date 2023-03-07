import { useFormik } from 'formik';
import { Button, FlexboxGrid, Form } from 'rsuite';

import { validationSchema } from './validationSchema';
import { IAddTodoFormProps, IFormValues } from './addTodoForm.interface';
import { TextArea } from '../TextArea/TextArea';
import { FC, useMemo } from 'react';
import styled from '@emotion/styled';
import {
  formStyles,
  StyledError,
  StyledSubmitButton,
} from './addTodoForm.style';

export const AddTodoForm: FC<IAddTodoFormProps> = (props) => {
  const { handleCreateTodo, onModalClose } = props;
  const initialValues: IFormValues = { title: '', content: '' };

  const onSubmit = (values: IFormValues) => {
    handleCreateTodo(values);
  };
  const { values, submitForm, setFieldValue, errors, getFieldProps } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  const StyledForm: any = useMemo(
    () =>
      styled(Form)`
        ${formStyles}
      `,
    []
  );

  return (
    <StyledForm>
      <Form.Group controlId='title'>
        <Form.ControlLabel>Todo Title</Form.ControlLabel>
        <Form.Control
          id='title'
          name='title'
          className='todoTitleInput'
          onChange={(newValue) => setFieldValue('title', newValue)}
          value={values.title}
        />
        {errors.title && <StyledError color='red'>{errors.title}</StyledError>}
      </Form.Group>

      <Form.Group controlId='content'>
        <Form.ControlLabel className='textAreaBox'>
          Todo Description
        </Form.ControlLabel>
        <TextArea id='content' getFieldProps={getFieldProps} />
      </Form.Group>

      <FlexboxGrid>
        <StyledSubmitButton onClick={submitForm} appearance='primary'>
          Add Todo
        </StyledSubmitButton>

        <Button onClick={() => onModalClose(false)}>Cancel</Button>
      </FlexboxGrid>
    </StyledForm>
  );
};
