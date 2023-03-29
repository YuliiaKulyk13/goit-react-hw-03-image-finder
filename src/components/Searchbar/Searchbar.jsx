import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.PreventDefault();

    if (this.state.imageName.trim() === '') {
      toast.warn('Please enter a request!');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <FcSearch size="10" />
            <span>Search</span>
          </button>

          <input
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
