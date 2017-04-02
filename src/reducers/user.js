import {
  LOGIN,
} from '../actions/actionsTypes'

export default function userReducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return login(action.payload)
    default:
      return state
  }
}

function login(user) {
    return {
        userName: user,
    }
}