import { GET_CARDS_POSITIONS, UPDATE_CARDS_POSITIONS, ADD_NEW_ARRAY } from '../actions/products';

const initialState = [];

function cardsPositions(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_POSITIONS:
      return action.data;
    case UPDATE_CARDS_POSITIONS:
      const newState = state.map((item) => {
        if (item.listId === action.data.listId) {
          return action.data;
        }
        return item;
      });
      console.log(newState);
      return newState;
    case ADD_NEW_ARRAY:
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
}

export default cardsPositions;