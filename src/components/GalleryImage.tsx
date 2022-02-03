import React from 'react';

type GalleryImageProps = {
  link: string;
  desc: string;
  author: string;
  attributionLink: string;
};

const GalleryImage = ({
  link,
  desc,
  author,
  attributionLink
}: GalleryImageProps) => (
  <figure>
    <img src={link} alt={desc} />
    <figcaption>
      Photo by
      <a href={attributionLink} target='_blank' rel='noreferrer'>
        {author}
      </a>
    </figcaption>
  </figure>
);

export default GalleryImage;
