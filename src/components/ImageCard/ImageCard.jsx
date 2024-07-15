import css from "./ImageCard.module.css";

const ImageCard = ({ images: { urls, description } }) => {
    return (
        <div className={css.card}>
            <img src={urls.small}
                alt={description}
            />
        </div>
    );
    
};

export default ImageCard;