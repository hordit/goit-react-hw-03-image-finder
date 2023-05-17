import { Component } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { toast } from 'react-hot-toast';

export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleSearchNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchName } = this.state;

    if (searchName.trim() === '') {
      return toast.error('Please, enter search name!');
    }

    this.props.onSubmit(searchName);
    this.setState({ searchName: '' });
  };

  render() {
    const { searchName } = this.state;

    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <HiOutlineSearch />
          </button>

          <input
            className="input"
            type="text"
            name="searchName"
            value={searchName}
            onChange={this.handleSearchNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
