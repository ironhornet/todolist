import { FC } from 'react';
import { Modal } from 'rsuite';
import { IModalProps } from './modalPopup.interface';

import './modalPopup.scss';

export const ModalPopup: FC <IModalProps> = (props) => {
  const { open, onChange, title, children } = props;

  return (
    <Modal
      open={open}
      onClose={() => onChange(false)}
      backdrop
      className='modal'
    >
      <Modal.Title>{title}</Modal.Title>

      {children}
    </Modal>
  );
};
