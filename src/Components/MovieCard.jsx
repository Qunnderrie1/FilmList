import { motion } from 'framer-motion';
import React from 'react'
import '../App.css'

const MovieCard = ({img, title, description, director}) => {
  return (
    <motion.div 
    whileHover={{scale: 1.1}}
    transition={{duration:0.3}}
    initial={{opacity:0}}
    whileInView={{opacity:1}}
     className='movieContainer container shadow-lg'>
        <img src={img} alt="" srcset="" />
        <h1>{title}</h1>
        <article>{description}</article>
        <p>Directed by: {director}</p>
    </motion.div>
  )
}


export default MovieCard;