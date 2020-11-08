import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSellers } from '../actions/index'
import Sellers from '../components/seller/Sellers'
 
class SellerContainer extends Component {
    render() { 
        return (
            <div>
                <h2>Sellers</h2>
                <Sellers sellers={this.props.sellers} addSellers={this.props.addSellers} />
            </div>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        sellers: state.sellers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSellers: () => dispatch(addSellers())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SellerContainer);