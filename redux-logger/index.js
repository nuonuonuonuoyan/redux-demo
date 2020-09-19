const logger = ({ getState }) => next => action => {
    console.group('action', action.type)
    console.info('prev state', getState())
    console.info('action', action)
    let result = next(action)
    console.log('next state', getState())
    console.groupEnd()
    return result
}

export default logger