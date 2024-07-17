import css from "./ImageCard.module.css";
import PropTypes from 'prop-types';

const ImageCard = ({ images: { urls, description }, openModal }) => {
    return (
        <div className={css.card} onClick={() => openModal(description, urls.regular)}>
            <img src={urls.small}
                alt={description}
            />
        </div>
    );
    
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;