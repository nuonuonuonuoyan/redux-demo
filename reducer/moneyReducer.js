
import { SAVE, TAKE } from '../action'

const moneyState = {
    money: 100
}

const moneyReducer = (state = moneyState, action) => {
    switch (action.type) {
        case SAVE:
            return {
              ...state,
              money: state.money + action.money
            }
        case TAKE:
            return {
              ...state,
              money: state.money - action.money
            }
        default:
            return state
    }
}

export default moneyReducer