import Modal from 'react-modal';
import css from './ImageModal.module.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
  },
};

interface ImageModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  imageModal: {
    url: string;
    alt: string;
  };
}
function ImageModal({ closeModal, modalIsOpen, imageModal }: ImageModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <img className={css.img} src={imageModal.url} alt={imageModal.alt} />
    </Modal>
  );
}

export default ImageModal;
