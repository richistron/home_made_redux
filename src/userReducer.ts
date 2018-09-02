
export interface UserAction {
  readonly type: string
  readonly user: {id: number, name: string}
}

interface user {
  readonly id: number
  readonly name: string
}

interface State {
  readonly users: Users
  readonly isLoading: boolean
}

interface Users {
  [index: string] : user
}

export interface userReducerFunc {
  (state: State, action: UserAction): State
}

const userReducer : userReducerFunc = function (state, action) {
  if (state) {
    switch (action.type) {
      case 'add_user': {
        const newState = {
          ...state,
        }
        newState.users[action.user.id] = action.user
        return newState;
      }
      default: {
        return state;
      }
    }
  }
  return {
    users: {},
    isLoading: false,
  }
}

export default userReducer;
