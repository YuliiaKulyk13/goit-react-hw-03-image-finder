import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleSearchBarSubmit = imageName => {
    this.setState({
      imageName,
      page: 1,
      images: [],
    });
  };

  componentDidMount() {
    // this.setState({ loading: true });
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=33700008-b0f3fc2623c0687ada0dd2d9b&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(response => response.json())
      .then(image => this.setState({ image }));
    // .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ToastContainer autoClose={3000} />
        {/* {this.state.loading && <h1>Loading...</h1>} */}
      </div>
    );
  }
}
