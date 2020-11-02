import React from 'react'
import Car from './Car'

const Cars = props => {
    return <div>
        {props.cars.map(car => <Car car={car} />)}
    </div>
}

export default Cars