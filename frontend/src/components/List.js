import React, { Component } from 'react';
import { connect } from 'react-redux';
import Attorney from './Attorney';


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attorneys: [],
            toggle: false
        }
    }


    handleSort = () => {
        let sortedList = this.props.attorneys.sort((a, b) => (a.location.toLowerCase() > b.location.toLowerCase()) ? 1 : -1)
        if (!this.state.toggle) {
            this.setState({
                attorneys: sortedList,
                toggle: true
            })
          } else {
            this.setState({
                attorneys: sortedList.sort((a, b) => (a.id - b.id)),
                toggle: false
            })
          }
        } 
      
    

    render() {
        console.log(this.state)
        const attorneys = this.props.attorneys.map ((attorney, i) => <Attorney key={i} name={ attorney.name } location={ attorney.location } description={ attorney.description } />)
        return (
            <div>
            <h2>Attorneys List:</h2>
            <button onClick={ this.handleSort }>Sort</button>
                { attorneys }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        attorneys: state.attorneys,
    }
}

export default connect(mapStateToProps)(List);
 

// sort button which sorts attorneys by location and can be clicked to unsort