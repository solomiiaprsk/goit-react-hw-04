import ImageCard from "../ImageCard/ImageCard";
import { forwardRef } from "react";
import css from "./ImageGallery.module.css"


const ImageGallery = forwardRef(({ data }, ref) => {
    return (
        <ul ref={ref} className={css.gallery}>
            {data.map((image) => (
                <li key={image.id} className={css.galleryItem}>
                    <ImageCard key={image.id} images={image} />
                </li>
            ))}
            
        </ul>

    );

});

export default ImageGallery;