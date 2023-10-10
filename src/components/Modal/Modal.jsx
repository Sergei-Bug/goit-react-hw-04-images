import { Backdrop, ModalContent } from './Modal.styled';

function Modal({ children, funcClick }) {
  return (
    <Backdrop
      onClick={e => {
        if (e.target === e.currentTarget) {
          funcClick();
        }
      }}
    >
      <ModalContent>{children}</ModalContent>
    </Backdrop>
  );
}

export default Modal;
