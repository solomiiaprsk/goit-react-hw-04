import Modal from 'react-modal';
import css from "./ImageModal.module.css"

const ImageModal = ({
  isOpen,
  closeModal,
  imageInfo: { alt, url },
}) => { 
return (
    <>
      <Modal
        isOpen={isOpen}
        overlayClassName={css.overlay}
        className={css.content}
        closeTimeoutMS={350}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
      >
        <img src={url} alt={alt} />
      </Modal>
    </>
  );
}


export default ImageModal;