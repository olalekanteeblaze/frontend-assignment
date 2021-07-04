import React, { useCallback } from 'react'
import axios from 'axios'
import logo from '../../images/logo.svg'
import { debounce } from '../../utils'
import './index.scss'


const Header = ({ setMovies, searchQuery, setSearchQuery }) => {
     // eslint-disable-next-line
    const searchMovies = useCallback(
       debounce(async (query) => {
           if(query !== ''){
                const res = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${query}`)
                if(res.status === 200){
                    setMovies(res.data.results)
                }
           }
    }, 500), [])
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
        searchMovies(e.target.value)
    }
    return (
        <header className="header">
            <img src={logo} alt="Timescale Logo" className="header__logo" />
            <input type="text" placeholder="Search for a movie" className="header__input" value={searchQuery} onChange={handleInputChange}/>
        </header>
    )
}

export default Header;