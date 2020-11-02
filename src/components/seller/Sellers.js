import React from 'react'
import Seller from './Seller'

const Sellers = props => {
    return <div>
        {props.sellers.map(seller => <Seller seller={seller}/>)}
    </div>
}

export default Sellers