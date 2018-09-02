
export interface UserAction {
  type: string
  user: {id: number, name: string}
}

interface user {
  id: number
  name: string
}

interface State {
  users: user[]
  isLoading: boolean
}

export interface userReducerFunc {
  (state: State, action: UserAction): State
}

const userReducer : userReducerFunc = function (state, action) {
  if (state) {
    switch (action.type) {
      case 'add_user': {
        return {
          ...state,
          users: [...state.users, action.user]
        }
      }
      default: {
        return state;
      }
    }
  }
  return {
    users: [],
    isLoading: false,
  }
}

export default userReducer;
