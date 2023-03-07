import styled from '@emotion/styled';
import { Modal } from 'rsuite';

export const StyledModal = styled(Modal)`
  .rs-modal-title {
    text-align: center;
    margin-bottom: 15px;
  }
  .rs-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modalControls {
    margin-top: 15px;

    button + button {
      margin-left: 10px;
    }
  }
`;
