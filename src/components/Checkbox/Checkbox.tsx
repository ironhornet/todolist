import { FC } from 'react';

import { StyledDiv } from './checkbox.style';
import { ICheckboxProps } from './checkbox.interface';

export const Checkbox: FC<ICheckboxProps> = (props) => {
  const { onChange, checked, id } = props;

  return (
    <StyledDiv>
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>
        <svg viewBox='0,0,50,50'>
          <path d='M5 30 L 20 45 L 45 5'></path>
        </svg>
      </label>
    </StyledDiv>
  );
};
