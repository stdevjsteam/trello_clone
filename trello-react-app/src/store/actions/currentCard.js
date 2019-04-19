export const GET_CURRENT_CARD = 'GET_CURRENT_CARD';
export const DELETE_CURRENT_CARD = 'DELETE_CURRENT_CARD';

export const getCurrentCard = (currentCardid) => async dispatch => {
  const card = await fetch('http://localhost:3004/cards/' + currentCardid)
    .then(responce => responce.json())
  return dispatch({ type: GET_CURRENT_CARD, data: card });
}

export const deleteCurrentCard = () => {
  return ({ type: DELETE_CURRENT_CARD });
}