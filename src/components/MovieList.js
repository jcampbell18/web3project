import React from 'react'
import Movie from './Movie'

class MovieList extends React.Component {
    render() {
        return (
            <main>
                {this.props.movies.map((movie, index) => {
                    return (
                        <Movie 
                            title={movie.title} 
                            genre_ids={movie.genre_ids}
                            overview={movie.overview} 
                            release_date={movie.release_date} 
                            vote_average={movie.vote_average}
                            poster_path={movie.poster_path}
                            url_path="https://image.tmdb.org/t/p/w185_and_h278_bestv2"
                            key={index} />
                    )
                })}
            </main>
        )
    }
}

export default MovieList