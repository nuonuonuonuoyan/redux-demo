import { SAVE, TAKE, PLUS, MINUS, ASYNC } from './action-type'

// 创建两个action，一个是数量加10000，一个是数量减1
export const saveAction = {
    type: SAVE,
    money: 10000,
}

export const takeAction = {
    type: TAKE,
    money: 1,
}

// 创建两个action，一个是数量加10000，一个是数量减1
export const plusAction = {
    type: PLUS,
    count: 13
}

export const minusAction = {
    type: MINUS,
    count: 11
}

export const asyncAction = newDispatch => {
    setTimeout(() => {
        newDispatch({
            type: ASYNC,
            payload: {
                username: '彭于晏',
                size: 18,
            }
        })
    }, 3000)
}
