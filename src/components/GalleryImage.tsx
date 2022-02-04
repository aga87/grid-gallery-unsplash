import React, { useState } from 'react';
import ResponsiveImagePlaceholder from './ResponsiveImagePlaceholder';
import Modal from './templates/Modal';

type GalleryImageProps = {
  id: string;
  link: string;
  desc: string;
  width: number;
  height: number;
  author: string;
  attributionLink: string;
};

const GalleryImage = ({
  id,
  link,
  desc,
  width,
  height,
  author,
  attributionLink
}: GalleryImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageIsLoaded = () => {
    setIsImageLoaded(true);
  };

  const handleOpenInModalClick = () => {
    setIsModalOpen(true);
  };

  const handleOpenInModalKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    switch (key) {
      case 'Space':
      case 'Enter': {
        e.preventDefault();
        setIsModalOpen(true);
        break;
      }
      default:
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      id={`modal-${id}`}
      isOpen={isModalOpen}
      handleClose={handleModalClose}
    >
      <figure className='gallery-image'>
        {!isImageLoaded && (
          <ResponsiveImagePlaceholder width={width} height={height} />
        )}
        <div
          role='button'
          className={
            !isModalOpen ? 'gallery-image__interactive-image-wrapper' : ''
          }
          onClick={handleOpenInModalClick}
          onKeyDown={handleOpenInModalKeyDown}
          tabIndex={0}
        >
          <img
            className={`gallery-image__image ${
              isImageLoaded ? 'gallery-image__image--loaded' : ''
            } ${isModalOpen ? 'gallery-image__image--secondary' : ''}`}
            src={link}
            alt={desc}
            onLoad={handleImageIsLoaded}
          />
        </div>
        <figcaption
          className={`gallery-image__caption ${
            isModalOpen ? 'gallery-image__caption--secondary' : ''
          }`}
        >
          Photo by{' '}
          <a
            href={attributionLink}
            target='_blank'
            rel='noreferrer'
            className={`gallery-image__attr-link ${
              isModalOpen ? 'gallery-image__attr-link--secondary' : ''
            }`}
          >
            {author}
          </a>
        </figcaption>
      </figure>
    </Modal>
  );
};

export default GalleryImage;
