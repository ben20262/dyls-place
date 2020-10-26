import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSellers } from '../actions/index'
 
class SellerContainer extends Component {
    render() { 
        return (
            <div>
                SellerContainer
            </div>
        );
    }
}
 
const mapStateToProps = state => {
    sellers: state.sellers
}

const mapDispatchToProps = dispatch => {
    addSellers: () => dispatch(addSellers())
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SellerContainer);