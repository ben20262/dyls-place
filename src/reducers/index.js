export default function rootReducer(state = {cars: [], sellers: [], loading: true}, action) {
    switch (action.type) {
        case('ADD_CARS'):
            return {
                cars: action.cars,
                sellers: action.sellers,
                loading: false
            }
        case('FETCH_CARS'):
            return {
                ...state,
                loading: true
            }
        case('ADD_CAR'):
            return {
                ...state
            }
        case('ADD_SELLER'):
            return {
                ...state
            }
        default:
            return state
    }
}