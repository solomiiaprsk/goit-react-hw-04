import toast, { Toaster } from 'react-hot-toast';
import css from '../SearchBar/SearchBar.module.css'

function SearchBar({ onSearch }) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        
        if (topic.trim() === "") {
            toast.error("Search field cannot be empty");
            return;
        }

        onSearch(topic);
        form.reset();
        
  };

    return (
        <header>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    name="topic"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css.input}
                />
                <button type="submit" className={css.btn}>Search</button>
            </form>
            <Toaster />
        </header>
        
    );
}
export default SearchBar; 
