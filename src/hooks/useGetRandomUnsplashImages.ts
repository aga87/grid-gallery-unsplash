import { useState, useEffect } from 'react';
import axios from 'axios';

type Image = {
  id: string;
  link: string;
  desc: string;
  author: string;
  attributionLink: string;
};

// Based on GET random photo response https://unsplash.com/documentation#get-a-random-photo
type ResultItem = {
  id: string;
  description: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
};

const useGetRandomUnsplashImages = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<Image[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    const fetchPhotos = async () => {
      try {
        const result = await axios(
          `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          {
            params: {
              count: 30 // get maximum no of images
            }
          }
        );

        // Get specific image fields
        const imageList = result.data.map((image: ResultItem) => ({
          id: image.id,
          link: image.urls.regular,
          desc: image.description || '',
          // Attribution is required by Unsplash: https://help.unsplash.com/en/articles/2511315-guideline-attribution
          author: image.user.name,
          attributionLink: `${image.user.links.html}?utm_source=gallery&utm_medium=referral`
        }));

        setImages(imageList);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { images, isLoading, isError };
};

export default useGetRandomUnsplashImages;
