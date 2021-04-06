import React, { Component } from 'react';
import { connect } from 'react-redux';
import Attorney from './Attorney';

class List extends Component {
    render() {
        const attorneys = this.props.attorneys.map ((attorney, i) => <Attorney key={i} />)
        return (
            <div>

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
