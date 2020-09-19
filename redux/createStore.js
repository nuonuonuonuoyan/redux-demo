const createStore = (reducer, preloadedState, enhancer, ...args) => {
    let state;
    // subscibe结合dispatch是一个发布订阅模式
    // 需要一个订阅的数组
    let listners = []

    if (typeof reducer !== 'function') {
        return
    }

    if ((typeof preloadedState === 'function' && typeof enhancer === 'function') || (typeof enhancer === 'function' && typeof args[0] === 'function')) {
        return
    }

    if (typeof preloadedState === 'function') {
        if (typeof enhancer === 'undefined') {
            enhancer = preloadedState
            preloadedState = undefined
        }
    }

    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            return
        }

        let newCreateStore = enhancer(createStore)
        let newStore = newCreateStore(reducer, preloadedState)
        return newStore
    }

    state = preloadedState

    const subscribe = callback => {
        // 将所有要执行的函数存起来，订阅完成，等待被调用
        listners.push(callback)
    }

    // dispatch接收一个action
    // dispatch要调用reducer函数来修改state
    // dispatch也是一个发布者，将已经订阅的列表依次执行
    const dispatch = action => {
        state = reducer(state, action)
        listners.forEach(listner => {
            listner()
        })

    }

    // getState返回state
    const getState = () => state

    // 向外暴露的store对象 
    return {
        subscribe,
        dispatch,
        getState,
    }
}

export default createStore