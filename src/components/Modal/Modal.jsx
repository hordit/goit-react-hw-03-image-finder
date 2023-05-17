import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    const { code, target, currentTarget } = event;
    
    if (code === 'Escape' || target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Backdrop onClick={this.closeModal}>
        <div>{children}</div>
      </Backdrop>,
      modalRoot
    );
  }
}
