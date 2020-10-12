export default function rootReducer(state = {cars: [], sellers: []}, action) {
    switch (action.type) {
        case('ADD_CARS'):
            return state
        default:
            return state
    }
}