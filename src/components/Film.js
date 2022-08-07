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
        <div className="Film_Detail">
        <h3>Name: {film.title}</h3>
        <h1><p>{film.original_title}</p></h1>
        <img src= {film.movie_banner} width="60%" height="10%"></img>
        <p>
        <p>{film.description}</p>
        </p>
        <img src= {film.image} width="28%" height="0.5%"></img>
        <p> 
        </p>
        <button onClick={handleClick}>{favouriteButtonText}</button>
        </div>
        </>
    )
}

export default Film;
