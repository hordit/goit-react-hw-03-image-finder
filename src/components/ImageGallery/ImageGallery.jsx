import React from 'react';
import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
