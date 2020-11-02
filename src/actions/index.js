export const addCars = cars =>  {

}

export const addSellers = sellers => {

}

export const fetchCars = () => {
    return dispatchEvent({type: 'LOADING_CARS'})
    fetch(`${apiURL}/cars`)
    .then(resp => resp.json())
    .then(cars => dispatchEvent({type: 'ADD_CARS', cars}))
}