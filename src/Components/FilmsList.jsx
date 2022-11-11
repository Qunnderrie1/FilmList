import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx';




const FilmsList = () => {


    const [list , setList] = useState([]);


    useEffect(getFilms,[])

    function getFilms(){
        fetch(`https://ghibliapi.herokuapp.com/films`)
        .then((res) => res.json())
        .then((list) => setList(list))
        .catch((err) => console.log(err))
    }
    
    return <div className='movieList container'>
        {
            list.map(items => {
                return <MovieCard
                 title={items.title}
                  img={items.image}
                  description={items.description}
                  director={items.director}
                  />

                 
            })
        }
        </div>
 
}

export default FilmsList