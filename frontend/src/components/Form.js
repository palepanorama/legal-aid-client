import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: "",
        location: "",
        description: ""
    }

    render() {
        return (
            <div>
                <h3>Apply to Offer Your Services</h3>
                <form>
                    <div>
                        <label htmlFor="name">Your Name: </label>
                        <input type="text" id="name" value={ this.state.name } />
                        <br/>
                        <label htmlFor="location">Your Location: </label>
                        <input type="text" id="location" value={ this.state.location } />
                        <br />
                        <p><label htmlFor="description">Description: </label></p>
                        <textarea id="description" cols="30" rows="3" value={ this.state.description } placeholder="A brief description of the services you offer..."></textarea>
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Form
