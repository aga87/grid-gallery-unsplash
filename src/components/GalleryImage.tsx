import React, { useState } from 'react';
import ResponsiveImagePlaceholder from './ResponsiveImagePlaceholder';

type GalleryImageProps = {
  link: string;
  desc: string;
  width: number;
  height: number;
  author: string;
  attributionLink: string;
};

const GalleryImage = ({
  link,
  desc,
  width,
  height,
  author,
  attributionLink
}: GalleryImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageIsLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <figure className='gallery-image'>
      {!isImageLoaded && (
        <ResponsiveImagePlaceholder width={width} height={height} />
      )}
      <img
        className={`gallery-image__image ${
          isImageLoaded ? 'gallery-image__image--loaded' : ''
        }`}
        src={link}
        alt={desc}
        onLoad={handleImageIsLoaded}
      />
      <figcaption>
        Photo by{' '}
        <a
          href={attributionLink}
          target='_blank'
          rel='noreferrer'
          className='gallery-image__attr-link'
        >
          {author}
        </a>
      </figcaption>
    </figure>
  );
};

export default GalleryImage;
