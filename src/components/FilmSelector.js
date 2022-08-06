const FilmSelector = ({films, onFilmSelected}) => {

    const handleChange = event => {
        onFilmSelected(event.target.value)
    }

    return (
        <select defaultValue="" onChange= { handleChange }>
            <option value = "" disabled > Chose a film </option> {
                films.map(film => {
                    return ( <
                        option key = { film.title }
                        value = { film.title } > { film.title } </option>
                        )
                })
            }
        </select>
    )
}

export default FilmSelector;