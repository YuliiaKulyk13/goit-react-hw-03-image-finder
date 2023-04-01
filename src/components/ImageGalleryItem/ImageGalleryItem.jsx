export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return <img src={webformatURL} alt={tags} />;
};
