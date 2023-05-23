import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlGallery } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';

export const ImageGallery = ({ images, loading, error }) => {
  return (
    <>
      <UlGallery>
        {images.map(image => (
          <ImageGalleryItem key={image.id} {...image} />
        ))}
      </UlGallery>
      {error && <div>{error}</div>}
      {loading && <Loader />}
    </>
  );
};

