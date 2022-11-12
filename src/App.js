import React from 'react'
import { BrowserRouter , NavLink , Routes , Route } from 'react-router-dom';
import { HomePage , FilmsList } from './pages/index.js';
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
    </Routes>

  </BrowserRouter>

  )
}

export default App;