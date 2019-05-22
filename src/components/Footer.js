import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>Copyright &copy;<span className="currentYear">2019</span>,</div>
                <div>originally by Valdyn Hunt &amp; Jason Campbell.</div>
                <div>All rights reserved.</div>
            </footer>
        )
    }
}

export default Footer