import React from 'react'

class Movie extends React.Component {

    //<p className="genre">{this.props.genre_ids}</p>
    //<p className="score">Score: {this.props.vote_average}</p>

    render() {
        return (  
            <section key={this.props.title}>
                <p className="title">{this.props.title}</p>
                <p className="overview">{this.props.overview}</p>
                <p className="year">{this.props.release_date}</p>               
                <img src={this.props.url_path + this.props.poster_path} alt={this.props.title} title={this.props.title}/>
            </section>
        )
    }


}

export default Movie