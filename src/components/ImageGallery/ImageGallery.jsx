import  ImageGalleryItem  from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { getImages } from 'services/api';
import { HTTP_ERROR_MSG } from '../../services/constants';
import { toast } from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { GallerySkeleton } from 'components/GallerySkeleton';
export default class ImageGallery extends Component {
  state = {
    searchName: '',
    images: [],
    loading: false,
    error: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      this.loadImages();
    }
    const prevPage = prevProps.page;
    const nextPage = this.props.page;
    if (prevPage !== nextPage && nextPage > 1) {
      this.loadImages();
    }
  }

  loadImages = async () => {
    const { searchName, page } = this.props;

    try {
      this.setState({ loading: true, images: [], error: null });
      const images = await getImages(searchName, page);

      if (images.length === 0) {
        return toast.error('No images found. Please enter another keyword');
      }

      this.setState({ images });
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ loading: false });
    }
  };

  loadMoreImages = async () => {
    const { searchName, page } = this.props;

    try {
      this.setState({ loading: true, images: [], error: null });
      const images = await getImages(searchName, page);

      if (images.length === 0) {
        return toast.error('No images found. Please enter another keyword');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error: HTTP_ERROR_MSG });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, error, loading } = this.state;
    const { handleLoadMore } = this.props;

    return (
      <>
        {images && !loading && (
          <ul>
            {images.map(image => (
                <ImageGalleryItem key={image.id} {...image} />
            ))}
          </ul>
        )}
        {loading && <GallerySkeleton images={images} />}
        {error && <div>{error}</div>}
        {images.length > 0 && <Button onClick={handleLoadMore} />}
      </>
    );
  }
}
