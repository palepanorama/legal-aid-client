import React, { Component } from 'react'

class Attorney extends Component {
    render() {
        const {name, location, description } = this.props;
        return (
            <div>
                <h3>{ name }</h3>
                <h6>{ location }</h6>
                <p>{ description }</p>
            </div>
        )
    }
}

export default Attorney
