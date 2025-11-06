import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIKey } from "../../config/apiKey";
import { Container } from "./style";

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const image_path = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
            .then((response) => response.json())
            .then(data => {
                const movieData = {
                    id: data.id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                    rating: data.vote_average,
                    runtime: data.runtime,
                    genres: data.genres
                };
                setMovie(movieData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading || !movie) {
        return (
            <Container>
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Carregando detalhes do filme...</p>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="movie-container">
                <div className="movie-poster">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <div className="movie-details">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="movie-meta">
                        <span className="rating">⭐ {movie.rating}/10</span>
                        <span className="release-date">📅 {new Date(movie.releaseDate).toLocaleDateString('pt-BR')}</span>
                        {movie.runtime && <span className="runtime">⏱️ {movie.runtime} min</span>}
                    </div>
                    {movie.genres && movie.genres.length > 0 && (
                        <div className="genres">
                            {movie.genres.map(genre => (
                                <span key={genre.id} className="genre-tag">{genre.name}</span>
                            ))}
                        </div>
                    )}
                    <div className="sinopse-section">
                        <h2>Sinopse</h2>
                        <p className="sinopse">{movie.sinopse || "Sinopse não disponível."}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Details;