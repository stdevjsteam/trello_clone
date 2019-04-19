import { ADD_CARD_USERS_ARRAY, GET_CARD_USERS, UPDATE_CARD_USERS } from '../actions/cardUsers';

const initialState = [];

function cardUsers(state = initialState, action) {
  switch (action.type) {
    case GET_CARD_USERS:
      return action.data;
    case ADD_CARD_USERS_ARRAY:
      return [
        ...state,
        action.data
      ]
    case UPDATE_CARD_USERS:
      return state.map(user => {
        if (user.id === action.data.id) {
          return action.data;
        }
        return user;
      });
    default:
      return state;
  }
}

export default cardUsers;