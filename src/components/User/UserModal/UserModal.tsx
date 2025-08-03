import ReactModal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React from 'react';
import {} from './UserModal.styled';

ReactModal.setAppElement('#root');

export const UserModal = ({ id }) => {
  return (
    <ReactModal
      contentLabel="Modal window"
      isOpen={modalIsOpen}
      onRequestClose={() => {
        handleCloseModal({});
      }}
      className="ModalContent"
      overlayClassName="ModalOverlay"
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
    >
      <div>UserModal{id}</div>
    </ReactModal>
  );
};
