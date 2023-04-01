import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className="image-gallery">
      {items.map(item => (
        <li key={item.id} onClick={() => onClick(item.largeImageURL)}>
          {
            <ImageGalleryItem
              webformatURL={item.webformatURL}
              tags={item.tags}
            />
          }
        </li>
      ))}
    </ul>
  );
};
