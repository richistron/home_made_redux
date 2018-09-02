
export interface UserAction {
  readonly type: string
  readonly user: {id: number, name: string}
}

interface User {
  readonly id: number
  readonly name: string
}

export interface UserState {
  readonly users: Users
  readonly isLoading: boolean
}

interface Users {
  [index: string] : User
}

export interface userReducerFunc {
  (state: UserState, action: UserAction): UserState
}

const userReducer : userReducerFunc = function (state, action) {
  if (state) {
    switch (action.type) {
      case 'add_user': {
        const newUserState = {
          ...state,
        }
        newUserState.users[action.user.id] = action.user
        return newUserState;
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
