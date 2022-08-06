const FavouriteFilms = ({ films, onFilmSelected }) => {

    const FavouriteFilms = films.filter(film => film.isFavourite)

    return (
        <>
            <h3> Favourite Films </h3>
            <ul>
                {FavouriteFilms.map(film => {
                    return (
                        <li key= {film.title}>
                            <button onClick={() => onFilmSelected(film.title)}>{film.title}</button>
                        </li>
                )
                })}
            </ul>
        </>

    )
}

export default FavouriteFilms;