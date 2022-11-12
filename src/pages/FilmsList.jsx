import React, { useEffect, useState } from 'react';
import '../App.css';
import { filterFlimsByDirector , getListOf } from '../helpers/FilmHelper.js';


export default function FilmsList(){


    const [list , setList] = useState([]);
    const [searchDirector, setSearchDirector] = useState("");


    useEffect(getFilms,[])

    function getFilms() {
        fetch(`https://ghibliapi.herokuapp.com/films`)
        .then((res) => res.json())
        .then((films) => setList(films))
        .catch((err) => console.log(err))

    }

    let filmsByDirector = filterFlimsByDirector(list , searchDirector);
    let directors = getListOf(list , "director")
    
    
    return <div className='movieList container'>

         <form>
            <div className='form-group'>
                <label htmlFor="searchDirector">Filter By Director</label>
                <select value={searchDirector} onChange={(e) => setSearchDirector(e.target.value)}>
                    <option value={directors}>All</option>
                  {
                        directors.map((director, index) =>{
                          return <option key={director + index } value={director}>{director}</option>
                        })
                    }
                </select>

            </div>

        </form>
        {
         <ul>
            {
                filmsByDirector.map((film) =>{
                    return <li key={film.id}>{film.title}</li>
                })
            }
         </ul>
        } 
        </div>
 
}

