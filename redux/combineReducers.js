const combineReducers = reducerList => {
    if (typeof reducerList !== 'object') {
        return
    }

    let hasChanged = false

    // combineReducers的主要步骤
    // combineReducers的返回值会传入createStore，因此这个返回值是一个reducer函数
    // 声明一个新的空对象newState
    // 遍历reducerList，拿到遍历出来每一个reducer，将每一个reducer都执行一遍
    // 执行完拿到的state，赋予newState[key]，如： newState['countReducer'] = countReducer执行结果  newState['moneyReducer'] = moneyReducer执行结果
    // 返回newState，返回的newState将作为下次dispatch时的初始state
    return (state = {}, action) => {
        const newState = {}

        for (let key in reducerList) {
            let currentReducer = reducerList[key]


            // prevState也就是上一次dispatch返回的state
            // 比如第一次点击了存钱，调用store.dispatch(saveAction) 拿到最终的state值为 
            /**
             * { 
             *    countReducer: {
             *      count: 100
             *    }, 
             *    moneyReducer: {
             *      count: 10100
             *    }
             * }
             */
            // 当第二次store.dispatch 初始的的state值就为上面的结构，此时在遍历时，state[key]就能得到每个reducer下的state
            // 再进行赋值的时候，就看可以按照key更改当前key对应的state
            let prevState = state[key]

            newState[key] = currentReducer(prevState, action)
            
            // 检测state是否发生变化
            hasChanged = hasChanged || newState[key] !== prevState
        }
        

        // 还是检测state是否发生变化，再对比最终的state和传入的reducerList的长度是否一致
        hasChanged = hasChanged || reducerList.length !== Object.keys(state).length

        // 如果state发生了变化，返回newState，作为dispatch中更改后的state值
        // 如果reducer里返回的是原来的state，就返回原先的state
        return hasChanged ? newState : state
    }

}

export default combineReducers