const countState = {
    count: 100
}

import { PLUS, MINUS, ASYNC } from '../action'

const countReducer = (state = countState, action) => {
    switch (action.type) {
        case PLUS:
            return {
                ...state,
                count: state.count + action.count
            }
        case MINUS:
            return {
                ...state,
                count: state.count - action.count
            }
        case ASYNC:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default countReducer