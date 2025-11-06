import { Container, MovieList, Movie } from "./styles";
import { APIKey } from "../../config/apiKey";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const image_path = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then((response) => response.json())
            .then(data => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container>
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Carregando filmes populares...</p>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <h1>Filmes Populares</h1>
            <MovieList>
                {movies.map((movie) => (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <div className="poster-wrapper">
                                <img
                                    src={`${image_path}${movie.poster_path}`}
                                    alt={movie.title}
                                    className="poster"
                                />
                                <div className="overlay">
                                    <span className="title">{movie.title}</span>
                                    <span className="rating">⭐ {movie.vote_average}/10</span>
                                </div>
                            </div>
                        </Link>
                    </Movie>
                ))}
            </MovieList>
        </Container>
    );
}

export default Home;