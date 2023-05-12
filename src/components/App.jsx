import React, { Component } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchName: '',
  }

  handleFormSubmit = searchName => {
    this.setState({searchName});
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ToastContainer autoClose={3000} theme="colored"/>
      </Layout>
    );
  }
}
