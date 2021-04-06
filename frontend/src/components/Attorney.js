import React, { Component } from 'react'

class Attorney extends Component {
    render() {
        const {name, location, description } = this.props;
        return (
            <div>
                <h3>Attorney: { name }</h3>
                <h5>Location: { location }</h5>
                <p>Services Offered: { description }</p>
            </div>
        )
    }
}

export default Attorney
