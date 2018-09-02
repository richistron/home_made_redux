import {UserAction, userReducerFunc, UserState} from './userReducer'

interface Reducers {
  readonly users: userReducerFunc
  readonly [key: string]: any
}

interface AppState {
  [index : string ] : UserState
}

interface GetState {
  (reducers : Reducers, state?: AppState, action?: UserAction) : AppState
}

const getState : GetState = (reducers, state, action ) => {
  const newState : AppState = {}

  for (const item in reducers) {
    const reducer = reducers[item]
    newState[item] = reducer(state, action)
  }

  return newState
}

const createStore = (reducers : Reducers)  => {
  let state = getState(reducers)

  return {
    getState:  () => state,

    dispatch: (action : UserAction) => state = getState(reducers, state, action),
  }
}

export default createStore;
