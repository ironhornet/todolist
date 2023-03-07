import { ChangeEvent, forwardRef } from 'react';

import { StyledTextArea } from './textArea.style';
import { ITextAreaProps } from './textArea.interface';

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props, ref) => {
    const { id = '', getFieldProps, handleChange, value, ...rest } = props;

    const handleChangehandler = (e:  ChangeEvent<HTMLTextAreaElement>) => {
      if (handleChange) handleChange(e.target.value);
    };

    return (
      <StyledTextArea
        maxLength={300}
        rows={5}
        id={id}
        ref={ref}
        className='textArea'
        value={value}
        onChange={handleChangehandler}
        {...(getFieldProps && { ...getFieldProps(id) })}
        {...rest}
      />
    );
  }
);
