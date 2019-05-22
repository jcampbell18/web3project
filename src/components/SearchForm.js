import React from 'react'

class SearchForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            query: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.searchMovie(this.state.query)
        this.setState({
            query: ''
        })
    }
    
    render() {
        return (
            <nav>
                <form
                    onSubmit={this.handleSubmit}
                    className="search-form">
                    <label htmlFor="search">Search</label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.query}
                        placeholder="search by movie title"
                        name="q" 
                        aria-label="Search by movie title"
                        type="search" />
                </form>
            </nav>
        )
    }
}

export default SearchForm