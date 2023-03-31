import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImagesGallery } from './API/api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    imageName: '',
    images: [],
    loading: false,
    page: 1,
    totalImages: 0,
    error: null,
  };

  handleSearchBarSubmit = imageName => {
    this.setState({
      imageName,
      page: 1,
      images: [],
    });
  };

  async componentDidUpdate(prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ loading: true });
      try {
        const response = await fetchImagesGallery(nextName, nextPage);

        if (response.status !== 200 || response.data.hits.length === 0) {
          return toast.error('Something went wrong. Please try again!');
        }
        this.setState({
          totalImages: response.data.totalHits,
        });
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      } catch (error) {
        return toast.error(
          'Sorry, there are no images matching your request. Please try again.'
        );
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ToastContainer autoClose={3000} />
        {loading && <Loader />}
      </div>
    );
  }
}
