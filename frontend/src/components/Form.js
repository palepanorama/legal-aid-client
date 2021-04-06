import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <h3>Apply to Offer Your Services</h3>
                <form>
                    <div>
                        <label>Your Name: </label>
                        <input type="text" />
                        <br/>
                        <label>Your Location: </label>
                        <input type="text" />
                        <br />
                        <textarea cols="30" rows="3" placeholder="A brief description of the services you offer..."></textarea>
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Form
