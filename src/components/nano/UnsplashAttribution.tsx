import React from 'react';

type UnsplashAttributionProps = {
  appName: string;
};

const UnsplashAttribution = ({ appName }: UnsplashAttributionProps) => (
  <p>
    Source:{' '}
    <a
      href={`https://unsplash.com/?utm_source=${appName}&utm_medium=referral`}
      target='_blank'
      rel='noreferrer'
    >
      Unsplash
    </a>
  </p>
);

export default UnsplashAttribution;
