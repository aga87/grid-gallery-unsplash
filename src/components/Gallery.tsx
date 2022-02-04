import React, { useRef, useEffect } from 'react';
import useGetRandomUnsplashImages from '../hooks/useGetRandomUnsplashImages';
import GalleryImage from './GalleryImage';
import GalleryFooter from './GalleryFooter';
import MasonryGrid from './templates/MasonryGrid';

const Gallery = () => {
  const { images, isLoading, isError } = useGetRandomUnsplashImages();
  const firstImageRef = useRef<HTMLDivElement>(null);

  const galleryImages = images.map((image, i) => {
    const { id, link, desc, width, height, author, attributionLink } = image;
    return (
      <React.Fragment key={id}>
        <GalleryImage
          ref={i === 0 ? firstImageRef : null}
          id={id}
          link={link}
          desc={desc}
          width={width}
          height={height}
          attributionLink={attributionLink}
          author={author}
        />
      </React.Fragment>
    );
  });

  // Focus first image when the gallery renders
  useEffect(() => {
    firstImageRef?.current?.focus();
  });

  /*  We can handle different states here, instead of returning `null`, e.g.:
      - loading state -> show spinning loader icon
      - error state -> display custom error message
      - no images -> display custom message
   */
  if (images.length === 0 || isLoading || isError) return null;

  return (
    <section className='gallery'>
      <div className='gallery__content'>
        <MasonryGrid>{galleryImages}</MasonryGrid>
      </div>
      <GalleryFooter />
    </section>
  );
};

export default Gallery;
