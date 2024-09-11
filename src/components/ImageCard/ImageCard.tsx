import { Image } from '../ImageGallery/ImageGallery';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  setImageUrl: (objImage: { url: string; alt: string }) => void;
  openModal: () => void;
}

function ImageCard({ image, setImageUrl, openModal }: ImageCardProps) {
  function handleClick() {
    setImageUrl({
      url: image.urls.full,
      alt: image.alt_description,
    });
    openModal();
  }

  return (
    <div className={css.div} onClick={handleClick}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;
//image.urls.regular
