import { useState, useEffect } from 'react'
import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery';
import { getImages } from "../../../src/images-api";
import LoadMoreBtn from "./../LoadMoreBtn/LoadMoreBtn"; 
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState({ alt: "", url: "" });


  const handleSearch = async (newQuery) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {

    if (query.trim() === "") {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const imagesData = await getImages(query, page);
        setImages(prevImages => {
          return [...prevImages, ...imagesData.results]
        });
        if (imagesData.total === 0) {
          const notifyNoResults = () =>
            toast.error("Error. No images found. Please try again!", {
            });
          return notifyNoResults();
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

 const openModal = (alt, url) => {
    setIsOpen(true);
    setImageInfo({ alt, url });
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageInfo({ alt: "", url: "" });
  };

  return (
  
    <div>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
         {images.length > 0 && (
        <ImageGallery openModal={openModal} data={images} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageInfo={imageInfo}
      />
      {loading && <Loader />}
      {error && images.length!==0 && <ErrorMessage />}
      {images.length > 0 && <ImageGallery data={images} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      

    </div>

  );
};

export default App
