import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { UlGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
      <UlGallery>
        {images.map(image => (
          <ImageGalleryItem key={image.id} {...image} />
        ))}
      </UlGallery>
  );
};

