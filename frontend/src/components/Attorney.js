import React, { Component } from 'react';


class Attorney extends Component {

    render() {
        const { name, location, description } = this.props;
        return (
            <div>
                <h4>Attorney: { name } </h4>
                <p>Location: { location }</p>
                <p>Services Offered: { description }</p>
            </div>
        ) 
    }
}

export default Attorney 
