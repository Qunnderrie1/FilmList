import React, { useEffect, useState } from 'react';
import '../App.css';
import { filterFlimsByDirector , getListOf, getFilmsStats } from '../helpers/FilmHelper.js';
import { Link } from 'react-router-dom';


export default function FilmsList(){


    const [list , setList] = useState([]);
    const [searchDirector, setSearchDirector] = useState("");


    useEffect(() =>{
        getFilms();
    }, [])

    function getFilms() {
        fetch(`https://ghibliapi.herokuapp.com/films`)
        .then((res) => res.json())
        .then((films) => setList(films))
        .catch((err) => console.log(err))

    }

    let filmsByDirector = filterFlimsByDirector(list , searchDirector);
    let directors = getListOf(list , "director")
    let { avg_score , latest , total} = getFilmsStats(filmsByDirector)

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
        <div>
  <div>
    <span># Of Films: {""}</span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating: {""}</span>
    <span>{avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film:  {""}</span>
    <span>{latest}</span>
  </div>
</div>
        {
         <ul>
            {
                filmsByDirector.map((film) =>{
                    return <li key={film.id}>
                       <Link to={`/films/${film.id}`}>{film.title}</Link>
                        </li>
                       
                })
            }
         </ul>
        } 
        </div>
 
}

