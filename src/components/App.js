import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from './Header'
import Movies from './Movies'
import Modal from './Modal'

const App = () => {
	const [movies, setMovies] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [visible, setVisible] = useState(false)
	const [selectedMovie, setSelectedMovie] = useState([])
	async function fetchData() {
		const res = await axios.get(`${process.env.REACT_APP_API_DOMAIN}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
		if(res.status === 200){
			setSearchQuery('')
			setMovies(res.data.results)
		}
	}
	useEffect(() => {
		if(!searchQuery && movies.length === 0){
			fetchData()
		}
	},[searchQuery, movies])
	return (
		<>
			<Header setMovies={setMovies} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<Movies movies={movies} searchQuery={searchQuery} fetchData={fetchData} setSelectedMovie={setSelectedMovie} setVisible={setVisible}/>
			<Modal visible={visible} setVisible={setVisible} movie={selectedMovie} />
		</>
	)
}

export default App;
