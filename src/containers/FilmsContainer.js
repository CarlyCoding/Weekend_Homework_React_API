import {useState, useEffect} from 'react'
// Future imports here

const FilmsContainer = () => {

    const [films, setFilms] = useState([])
    // Set selector here 


    useEffect(() => {
      getFilms()
        
    }, [])

    const getFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(res => console.log(res))

    }

    return (null)
}

export default FilmsContainer;