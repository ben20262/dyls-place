import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCars } from '../actions/index'
import Cars from '../components/car/Cars'
 
class CarContainer extends Component {
    render() { 
        return (
            <div>
                <h2>Cars</h2>
                <Cars cars={this.props.cars} addCars={this.props.addCars} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cars: state.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCars: () => dispatch(addCars())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);