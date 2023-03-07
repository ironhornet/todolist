import { FC } from 'react';
import { Modal } from 'rsuite';

import { StyledModal } from './modalPopup.style';
import { IModalProps } from './modalPopup.interface';


export const ModalPopup: FC <IModalProps> = (props) => {
  const { open, onChange, title, children } = props;


  return (
    <StyledModal
      open={open}
      onClose={() => onChange(false)}
      backdrop
    >
      <Modal.Title >{title}</Modal.Title>

      {children}
    </StyledModal>
  );
};
