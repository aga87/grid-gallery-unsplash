import React from 'react';
import useGetRandomUnsplashImages from '../hooks/useGetRandomUnsplashImages';
import GalleryImage from './GalleryImage';
import GalleryFooter from './GalleryFooter';
import MasonryGrid from './templates/MasonryGrid';

const Gallery = () => {
  const { images, isLoading, isError } = useGetRandomUnsplashImages();

  const galleryImages = images.map(image => {
    const { id, link, desc, width, height, author, attributionLink } = image;
    return (
      <React.Fragment key={id}>
        <GalleryImage
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
