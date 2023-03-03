import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Title is required')
    .max(80, 'Title must be no longer than 80 char'),
});
