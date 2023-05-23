import React, { Component } from 'react';
import { Loyout } from './App.styled';
import { GlobalStyle } from '../GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { getImages } from 'services/api';
import { HTTP_ERROR_MSG } from 'services/constants';
import Searchbar from '../Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    showBegin: false,
    error: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.searchName;
    const prevPage = prevState.page;
    const { searchName, page } = this.state;

    if (prevName !== searchName || prevPage !== page) {
      this.setState({ loading: true, error: '' });

      try {
        const { totalHits, hits } = await getImages(searchName, page);

        if (!hits.length) {
          return toast.error('No images found. Please enter another keyword');
        }

        this.setState(({ images }) => ({
          images: [...images, ...hits],
          totalHits,
          showBegin: page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error: HTTP_ERROR_MSG });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = searchNewName => {
    this.setState({ searchName: searchNewName, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, showBegin, error } = this.state;

    return (
      <Loyout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <div>{error}</div>}
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {showBegin && <Button onClick={this.handleLoadMore} />}
        <Toaster position="top-center" reverseOrder={true} />
        <GlobalStyle />
      </Loyout>
    );
  }
}
