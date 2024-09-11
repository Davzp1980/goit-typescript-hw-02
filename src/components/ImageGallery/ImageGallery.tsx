import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export type Image = {
  id: string;
  urls: {
    full: string;
    small: string;
  };
  alt_description: string;
};

interface ImageGalleryProps {
  images: Image[];
  setImageUrl: (objImage: { url: string; alt: string }) => void;
  openModal: () => void;
}
function ImageGallery({ images, setImageUrl, openModal }: ImageGalleryProps) {
  return (
    <ul className={css.ul}>
      {images.map(image => (
        <li key={image.id} className={css.li}>
          <ImageCard
            image={image}
            setImageUrl={setImageUrl}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
