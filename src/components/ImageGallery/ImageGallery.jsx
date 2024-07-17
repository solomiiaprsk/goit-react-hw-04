import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"
import React, { forwardRef } from 'react';


const ImageGallery = forwardRef(({ data, openModal }, ref) => {
    return (
        <ul ref={ref} className={css.gallery}>
            {data.map((image) => (
                <li key={image.id} className={css.galleryItem}>
                    <ImageCard images={image} openModal={openModal} />
                </li>
            ))}
            
        </ul>

    );

});

export default ImageGallery;