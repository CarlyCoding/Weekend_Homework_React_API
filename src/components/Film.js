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
        <p>{film.original_title}</p>
        <img src= {film.image}></img>
        <button onClick={handleClick}>{favouriteButtonText}</button>
        </>
    )
}

export default Film;
