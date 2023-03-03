import { useFormik } from 'formik';
import { Button, Form, Input } from 'rsuite';

import './addTodoForm.scss';
import { validationSchema } from './validationSchema';
import { IAddTodoFormProps, IFormValues } from './addTodoForm.interface';
import { TextArea } from '../TextArea/TextArea';
import { FC } from 'react';

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

  return (
    <Form>
      <Form.Group controlId='title'>
        <Form.ControlLabel>Todo Title</Form.ControlLabel>
        <Form.Control
          id='title'
          name='title'
          className='todoTitleInput'
          onChange={(newValue) => setFieldValue('title', newValue)}
          value={values.title}
        />
        {errors.title && (
          <Form.HelpText className='errorText'>{errors.title}</Form.HelpText>
        )}
      </Form.Group>

      <Form.Group controlId='content'>
        <Form.ControlLabel className='textAreaBox'>
          Todo Description
        </Form.ControlLabel>
        <TextArea id='content' getFieldProps={getFieldProps} />
      </Form.Group>

      <div className='buttonBox'>
        <Button
          className='formSubmitBtn'
          onClick={submitForm}
          appearance='primary'
        >
          Add Todo
        </Button>
        <Button onClick={() => onModalClose(false)}>Cancel</Button>
      </div>
    </Form>
  );
};
