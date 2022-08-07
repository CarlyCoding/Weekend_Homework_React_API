const Film = ({ film, onFavouriteToggle }) => {

    if (!film) {
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(film.title)
    }

    const favouriteButtonText = film.isFavourite ? 'Remove from favourites' : 'Add to favourites'

    return (
        <>
        <h3>Name: {film.title}</h3>
        <h1><p>{film.original_title}</p></h1>
        <img src= {film.movie_banner} width="40%" height="20%"></img>
        <p>
        <p>{film.description}</p>
        </p>
        <img src= {film.image}></img>
        <p>
        </p>
        <button onClick={handleClick}>{favouriteButtonText}</button>
        </>
    )
}

export default Film;
