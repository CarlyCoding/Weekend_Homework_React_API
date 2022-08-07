const FavouriteFilms = ({ films, onFilmSelected }) => {

    const FavouriteFilms = films.filter(film => film.isFavourite)

    return (
        <>
        <div className="favourites">
            <h3> My favourite Ghibli Films </h3>
            <ul>
                {FavouriteFilms.map(film => {
                    return (
                        <li id="film_list" key= {film.title}>
                            <button id ="Fave" onClick={() => onFilmSelected(film.title)}>{film.title}</button>
                        </li>
                )
                })}
            </ul>
        </div>
        </>

    )
}

export default FavouriteFilms;