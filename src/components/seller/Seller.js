import React from 'react'

const Seller = props => {

    let cars = props.seller.cars.map(car => <li>{car.title}</li>) //Links
    return (
        <div>
            <h3>{Seller.name}</h3>
            <ul>
                {cars}
            </ul>
        </div>
    )
}

export default Seller