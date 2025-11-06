import { Container, MovieList, Movie } from "./styles";

function home() {

    const movies = [
        {
            id: 1,
            title: 'Spider Man',
            image_url: 'https://th.bing.com/th/id/OIP.twsAmsYpRhmk-4Cbf0QiswHaK_?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            // link: 'https://google.com.br'
             
        },
        {
            id: 2,
            title: 'Batman',
            image_url: 'https://th.bing.com/th/id/OIP.twsAmsYpRhmk-4Cbf0QiswHaK_?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            // link: 'https://google.com.br'
        },
        {
            id: 3,
            title: 'Transformns',
            image_url: 'https://th.bing.com/th/id/OIP.twsAmsYpRhmk-4Cbf0QiswHaK_?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            // link: 'https://google.com.br'
        },
     ];

    return (
        <Container>
            <div>
                <h1>Movies</h1>
                <MovieList>

                    {movies.map((movie) => (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title} /></a>
                            <span>{movie.title}</span>
                        </Movie>
                    ))}
                    {/* <Movie>
                       <a href="https://google.com.br"><img src="https://th.bing.com/th/id/OIP.twsAmsYpRhmk-4Cbf0QiswHaK_?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="spider" /></a>
                        <span>Spider Man</span>
                    </Movie>

                    <Movie>
                        <a href="https://google.com.br"><img src="https://th.bing.com/th/id/OIP.twsAmsYpRhmk-4Cbf0QiswHaK_?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="spider" /></a>
                        <span>Spider Man</span>
                    </Movie>

                    <Movie>
                        <a href="https://google.com.br"><img src="https://th.bing.com/th/id/OIP.twsAmsYpRhmk-4Cbf0QiswHaK_?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="spider" /></a>
                        <span>Spider Man</span>
                    </Movie> */}
                </MovieList>
            </div>
        </Container>
    );
}

export default home;