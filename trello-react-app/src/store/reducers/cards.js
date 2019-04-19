import { GET_CARDS, ADD_CARD, UPDATE_CARDS } from '../actions/cards';

const initialState = [];

function cards(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return action.data;
    case ADD_CARD:
      return [
        ...state,
        action.data,
      ]
    case UPDATE_CARDS:
      const update = state.map(item => {
        if (item.id === action.data.id) { 
          return action.data;
        }
        return item;
      })
      console.log(update);
      return update;
    default:
      return state;
  }
}

export default cards;