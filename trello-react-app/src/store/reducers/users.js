import { GET_USERS, ADD_NEW_USER } from '../actions/users';

const initialState = [];

function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.data;
    case ADD_NEW_USER:
      return [
        ...state,
        action.data
      ];
    default:
      return state;
  }
}

export default users;