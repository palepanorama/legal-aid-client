import React, { Component } from 'react';
import { connect } from 'react-redux';
import Attorney from './Attorney';

class List extends Component {
    render() {
        const attorneys = this.props.attorneys.map ((attorney, i) => <Attorney key={i} name={ attorney.name } location={ attorney.location } description={ attorney.description } />)
        return (
            <div>
            <h4>Attorneys List</h4>
                { attorneys }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        attorneys: state.attorneys
    }
}
export default connect(mapStateToProps)(List);
