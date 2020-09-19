const compose = (...args) => {
    if (!args.length) {
        return arg => arg
    }

    if (args.length === 1) {
        return args[0]
    }

    return args.reduce((prev, curr) => (...args) => prev(curr(...args)))
}

const applyMiddleware = (...middlewares) => {
    // applyMiddleware返回的是一个enhancer函数
    // enhancer函数接收createStore作为参数，返回一个新的newCreateStore
    // newCreateStore接收reducer,返回新的newStore
    return createStore => {
        return (reducer, preloadedState) => {

            // 调用createStore，拿到store
            let store = createStore(reducer, preloadedState)

            // 声明一个新的dispatch
            let newDispatch;

            // 声明一个需要传入中间件的结构
            // dispatch为返回的新的dispatch
            const middlewareApi = {
                getState: store.getState,
                dispatch(action) {
                    return newDispatch(action)
                }
            }

            // 将store传入中间件函数，执行每一个中间件的逻辑，拿到每一个中间返回的新函数
            let funcList = middlewares.map(middleware => middleware(middlewareApi))

            // 然后执行组合函数
            const newFunc = compose(...funcList)

            // 新函数接收一个dispatch，返回一个dispatch
            newDispatch = newFunc(store.dispatch)

            // 返回dispatch更新后的store
            return { ...store, dispatch: newDispatch }
        }
    }
}

export default applyMiddleware



