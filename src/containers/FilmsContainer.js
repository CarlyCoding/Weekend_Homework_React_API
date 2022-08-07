import {useState, useEffect} from 'react'
import FilmSelector from '../components/FilmSelector'
import Film from '../components/Film'
import FavouriteFilms from '../components/FavouriteFilms'


const FilmsContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilmTitle, setSelectedFilmTitle] = useState('')

    
    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(filmsData => {
        console.log(filmsData);
        setFilms(filmsData);
      });
    }, [])


    const handleFilmSelected = (title) => {
      setSelectedFilmTitle(title)
    }

    const handleFavouriteToggle = (title) => {
      const updatedFilms = films.map((film) => {
        return film.title === title
          ? {...film, isFavourite: !film.isFavourite}
          :film
      })
      setFilms(updatedFilms)
    }

    const selectedFilm = films.find(film => film.title === selectedFilmTitle)


    return (
    <>

      <h2 id="title"> Studio Ghibli Films 
      <p>スタジオジブリ</p></h2>
      <p>
      </p>
        
        <h3 id="description"> Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio headquartered 
        in Koganei, Tokyo. It is best known for its animated feature films. The studio was founded on June 15, 1985, by directors Hayao Miyazaki and Isao Takahata 
        and producer Toshio Suzuki.</h3>
      <FilmSelector films={films} onFilmSelected={handleFilmSelected} />
      <Film film={selectedFilm} onFavouriteToggle={handleFavouriteToggle} />
      <FavouriteFilms films={films} onFilmSelected={handleFilmSelected} />
    </>
    )
}

export default FilmsContainer;
