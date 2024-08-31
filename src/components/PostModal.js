import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const PostModal = ({ isOpen, toggle, children }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {children.props.title}
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <button className='btn btn-danger' onClick={toggle}>Cancelar</button>
      </ModalFooter>
    </Modal>
  );
};

export default PostModal;
