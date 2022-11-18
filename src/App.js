import React from 'react'
import { BrowserRouter , NavLink , Routes , Route } from 'react-router-dom';
import  HomePage  from './pages/HomePage';
import  SingleFilmPage  from './pages/SingleFilmPage';
import  FilmsList  from './pages/FilmsList';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>

    <nav className='navBarContainer'>
        <ul className='navItems'>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>/</li>
            <li>
                <NavLink to='/films'>Films</NavLink>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsList /> } />
        <Route path='/films/:id' element={<SingleFilmPage /> } />
    </Routes>

  </BrowserRouter>

  )
}

export default App;