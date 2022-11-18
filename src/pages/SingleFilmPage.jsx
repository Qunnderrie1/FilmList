import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import '../App.css'

function SingleFilmPage(){

    const [item , setItem] = useState({});
    const { id } = useParams();

    function getFilm(){
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((res) => res.json())
        .then((film) => setItem(film))
        .catch(() => console.log("Error fetching data!"))

    }

    useEffect(
        getFilm,[id])
    return(
        <div className="filmContainer">
            <div>
                <img src={`${item.image}`} alt={`${item.title} Poster`} />
            </div>
            <div style={{textAlign: "center"}}>
                <h1>{item.title}</h1>
                <p>
                    Directed by {item.director}, Produced by {item.producer}.
                </p>
                <p>
                    The film was released in <strong>{item.release_date}</strong> {" "} 
                       a <strong>{item.rt_score}</strong> aggeregate score on {" "}
                    <a href="https://www.rottentomatoes.com/"
                    target="_blank"
                    rel="noreferrer">
                        Rotten Tomatoes
                    </a>.
                </p>
                <h2>Description</h2>
                <p>{item.description}</p>
            </div>

        </div>
    )
}

export default SingleFilmPage;