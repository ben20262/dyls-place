import React, { Component } from 'react'

class Car extends Component {


    render() {
        return (
            <div>
                <h3><a href={this.props.car.link}>{Car.title}</a></h3>
                <ul>
                    <li>{this.props.car.price}</li>
                    <li>{this.props.car.seller.name}</li>
                </ul>
                <p>{this.props.car.content}</p>
            </div>
        )
    }
}

export default Car