import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="text-outline">Movie Database Search v2</h1>
                <h5 className="text-outline">using the tMDB API</h5>
            </header>
        )
    }
}

export default Header