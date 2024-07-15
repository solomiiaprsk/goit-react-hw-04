import { useState, useEffect } from 'react'
import './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery';
import { getImages } from "../../../src/images-api";
import LoadMoreBtn from "./../LoadMoreBtn/LoadMoreBtn"


const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
 


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
    };

    async function fetchImages() {
      try {
        const imagesData = await getImages(query, page);
        setImages(prevImages => {
          return [...prevImages, ...imagesData.results]
        });

      } catch (error) {
        console.log("error", error)
      }
    }
    fetchImages();
  }, [query, page]);



  return (
  
    <div>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery data={images} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore}/>}

    </div>

  );
};

export default App
