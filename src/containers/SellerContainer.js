import React, { Component } from 'react';
import { connect } from 'react-redux'
 
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
    
}

const mapDispatchToProps = dispatch => {

}
 
export default connect(mapStateToProps, mapDispatchToProps)(SellerContainer);