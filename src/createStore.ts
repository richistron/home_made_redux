import {UserAction, userReducerFunc} from './userReducer'

interface reducers {
  readonly users: userReducerFunc
  readonly [key: string]: any
}

const createStore = function(reducers : reducers)  {
  let state : any = {}

  for (const item in reducers) {
    const reducer = reducers[item]
    state[item] = reducer(null, null)
  }

  return {
    getState: function () {
      return state
    },

    dispatch: function (action : UserAction) {
      for (const item in reducers) {
        const reducer = reducers[item]
        const scope = state[item]
        state[item] = reducer(scope, action)
      }
      return this;
    }
  }
}

export default createStore;
