import {useState, useEffect} from 'react'
import FilmSelector from '../components/FilmSelector'
import Film from '../components/Film'
import FavouriteFilms from '../components/FavouriteFilms'

const FilmsContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilmTitle, setSelectedFilmTitle] = useState('')

    useEffect(() => {
      getFilms()
    }, [])

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(filmsData => setFilms(filmsData))

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
      <h2> Films Container</h2>
      <FilmSelector films={films} onFilmSelected={handleFilmSelected} />
      <Film film={selectedFilm} onFavouriteToggle={handleFavouriteToggle} />
      <FavouriteFilms films={films} onFilmSelected={handleFilmSelected} />
    </>
    )
}}

export default FilmsContainer;
