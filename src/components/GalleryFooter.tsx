import React from 'react';
import UnsplashAttribution from './nano/UnsplashAttribution';

const GalleryFooter = () => (
  <footer>
    {/* Unsplash attribution is required:  https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines */}
    <UnsplashAttribution appName='test' />
  </footer>
);

export default GalleryFooter;
