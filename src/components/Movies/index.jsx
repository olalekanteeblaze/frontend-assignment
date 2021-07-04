import React from 'react'
import Placeholder from '../../images/placeholder.png'
import './index.scss'

const Movies = ({ movies, searchQuery, fetchData, setSelectedMovie, setVisible }) => {
    return (
        <div className="movies-container">
            <h3 className="movies-container__title">{ searchQuery ? `Showing results for '${searchQuery}'` : 'Most Recent Movies' }</h3>
            {searchQuery && movies.length === 0 ? 
            <div className="movies-container__empty-state">
                <div>
                    <div>{`No result  for ${searchQuery}`}</div>
                    <button className="movies-container__btn btn" onClick={() => fetchData()}>
                        Show Recent Movies
                    </button>
                </div>
            </div> :
            <div className="movies-container__grid">
                {movies?.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} setSelectedMovie={setSelectedMovie} setVisible={setVisible} />
                ))}
            </div>
            }
        </div>
    )
}

const MovieCard = ({ movie, setSelectedMovie, setVisible }) => {
    const { title, vote_average, poster_path } = movie
    const imgSrc = poster_path ?  `${process.env.REACT_APP_API_BASE_IMAGE_URL}${poster_path}` : Placeholder
    const selectMovie = () => {
        setVisible(true)
        setSelectedMovie(movie)
    }
    return (
        <div className="movie-card" onClick={selectMovie}>
            <img src={imgSrc} alt={`Poster for ${title}`} className="movie-card__poster" loading="lazy"/>
            <div className="movie-card__rating">{vote_average}</div>
            <div className="movie-card__name">{title}</div>
        </div>
    )
}
export default Movies