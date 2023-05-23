import React from 'react';
import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};