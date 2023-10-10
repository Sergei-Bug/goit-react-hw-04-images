import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import css from './ImageGallary.module.css';
import Modal from 'components/Modal/Modal';

function ImageGalleryItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickEsc = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onClickEsc);
    return window.removeEventListener('keydown', onClickEsc);
  }, [isModalOpen]);

  const handleClickOnImg = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { largeImageURL, webformatURL, tags } = item;

  return (
    <>
      <img
        className={css.imageGalleryItemStyle}
        src={largeImageURL}
        width="200"
        height="300"
        alt={tags}
        onClick={handleClickOnImg}
      />
      {isModalOpen && (
        <Modal funcClick={handleClickOnImg}>
          <img src={webformatURL} width="100%" height="100%" alt={tags} />
        </Modal>
      )}
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};
