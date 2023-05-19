import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/api';
import { HTTP_ERROR_MSG } from '../../services/constants';
import { toast } from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { UlGallery } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
export default class ImageGallery extends Component {
  state = {
    images: [],
    searchName: '',
    page: 1,
    loading: false,
    loadingMore: false,
    error: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      try {
        this.setState({ loading: true, images: [], page: 1, error: null });

        const images = await getImages(nextName, 1);
        this.setState({ images });

        if (images.length === 0) {
          return toast.error('No images found. Please enter another keyword');
        }

      } catch (error) {
        this.setState({ error: HTTP_ERROR_MSG });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = async () => {
    const { searchName } = this.props;
    const nextPage = this.state.page + 1;

    try {
      this.setState({ loadingMore: true });
      const images = await getImages(searchName, nextPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: nextPage,
      }));
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ loadingMore: false });
    }
  };

  render() {
    const { images, loading, loadingMore, error } = this.state;

    return (
      <>
        {images && !loading && (
          <UlGallery>
            {images.map(image => (
              <ImageGalleryItem key={image.id} {...image} />
            ))}
          </UlGallery>
        )}
        {images.length >= 12 && !loading && (
          <>
          {loadingMore && <Loader />} 
          <Button onClick={this.handleLoadMore} />
          </>
        )}
        {error && <div>{error}</div>}
        {loading && <Loader />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};