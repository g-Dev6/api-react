import { Container, MovieList, Movie } from "./styles";
import { APIKey } from "../../config/apiKey";
import { useEffect, useState } from "react";

function Home() {
    const [movies, setMovies] = useState([]);
    const image_path = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        // Consumir a API
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then((response) => response.json())
            .then(data => {
                console.log(data); // Para verificar os dados no console
                setMovies(data.results); // Definir os filmes no estado
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Container>
            <div>
                <h1>Movies</h1>
                <MovieList>
                    {movies.map((movie) => (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br">
                                <img 
                                    src={`${image_path}${movie.poster_path}`} 
                                    alt={movie.title} 
                                />
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    ))}
                </MovieList>
            </div>
        </Container>
    );
}

export default Home;