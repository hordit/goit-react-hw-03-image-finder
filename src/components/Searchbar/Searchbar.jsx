import { Component } from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleSearchNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.searchName.trim() === '') {
        toast.error('Please, enter serch name!');
        return;
    };

    this.props.onSubmit(this.state.searchName)
    this.setState({ searchName: '', });
  };

  render() {
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
            value={this.state.searchName}
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
