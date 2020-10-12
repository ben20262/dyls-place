import React, { Component } from 'react';
import { connect } from 'react-redux'
 
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

}

const mapDispatchToProps = dispatch => {

}
 
export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);