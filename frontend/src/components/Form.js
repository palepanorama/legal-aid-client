import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAttorney } from '../actions'

class Form extends Component {
    state = {
        name: "",
        location: "",
        description: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addAttorney(this.state, this.props.history);
    }

    render() {
        return (
            <div>
                <h3>Apply to Offer Your Services</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="name">Your Name: </label>
                        <input type="text" id="name" name="name" value={ this.state.name } onChange={ this.handleChange } />
                        <br/>
                        <label htmlFor="location">Your Location: </label>
                        <input type="text" id="location" name="location"value={ this.state.location } onChange= {this.handleChange } />
                        <br />
                        <p><label htmlFor="description">Description: </label></p>
                        <textarea id="description" name="description" cols="30" rows="3" value={ this.state.description } onChange={ this.handleChange } placeholder="A brief description of the services you offer..."></textarea>
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addAttorney })(Form)
