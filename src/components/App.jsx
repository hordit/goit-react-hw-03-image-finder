import React, { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { Toaster } from 'react-hot-toast';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { GallerySkeleton } from './GallerySkeleton';
export class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    error: '',
  };

  handleFormSubmit = searchNewName => {
    this.setState({ searchName: searchNewName, page: 1 });
  };

  // openModal = (largeImageURL, tags) => {
  //   this.setState(({ showModal }) => {
  //     return { showModal: !showModal, largeImageURL, tags };
  //   });
  // };

  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };

  render() {
    const {
      images,
      page,
      loading,
      searchName,
      error,
    } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && !loading && (
          <ImageGallery
            searchName={searchName}
            handleLoadMore={this.handleLoadMore}
            page={page}
          />
        )}
        {loading && <GallerySkeleton images={images} />}
        {error && <div>{error}</div>}
        <Toaster position="top-center" reverseOrder={true} />
        <GlobalStyle />
      </Layout>
    );
  }
}
