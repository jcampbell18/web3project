import React from 'react';
import API_KEY from './config'
import './App.css';
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            query: '',
            movies: [],
            genres: []
        }
        this.searchMovie = this.searchMovie.bind(this)
    }// end constructor

    searchMovie(text) {
        this.setState({query: text});

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`;
        fetch(url, {
          method: 'GET'
        })
          .then(results => {
              return results.json();
          }).then(data => {
            this.setState({ movies: data.results });
          })

    }// end SearchMovie function


    getGenres() {
        const url = 'https://gist.githubusercontent.com/jcampbell18/b84dcd06aed5714173a265bbfc5095a5/raw/83ee72e03bf2b5832e1bef6651ef4e9a2d7a9551/genres.json';
        fetch(url, {
            method: 'GET'
          })
            .then(results => {
                return results.json();
            }).then(data => {
              this.setState({ genres: data.results });
              console.log()
            })

    }// end getGenres function

    render() {
        return (
            <div className="app">
                <Header />
                <SearchForm searchMovie={this.searchMovie} />
                <MovieList movies={this.state.movies} />
                <Footer />
            </div>
        );
    }

}

export default App;
