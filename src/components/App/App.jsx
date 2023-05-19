import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../GlobalStyles';
import { Toaster } from 'react-hot-toast';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Loyout } from './App.styled';
import { Loader } from 'components/Loader/Loader';
export class App extends Component {
  static propTypes = {
    images: PropTypes.array,
    page: PropTypes.number,
    loading: PropTypes.bool,
    searchName: PropTypes.string,
    error: PropTypes.string,
  };

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

  render() {
    const {
      images,
      page,
      loading,
      searchName,
      error,
    } = this.state;

    return (
      <Loyout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && !loading && (
          <ImageGallery
            searchName={searchName}
            page={page}
          />
        )}
        {error && <div>{error}</div>}
        <Toaster position="top-center" reverseOrder={true} />
        {loading && <Loader />}
        <GlobalStyle />
      </Loyout>
    );
  }
}
