import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSellers } from '../actions/index'
 
class CarContainer extends Component {
    render() { 
        return (
            <div>
                CarContainer
            </div>
        );
    }
}

const mapStateToProps = state => {
    cars: state.cars
}

const mapDispatchToProps = dispatch => {
    addSellers: () => dispatch(addSellers())
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);